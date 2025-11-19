import test, { expect } from "@playwright/test";
import { users } from "../../test-data/credentials";
import { request } from "http";


test('Cars models public request', async({request}) =>{

    const response = await request.get('/api/cars/models');
    const body =  await response.json();
    console.log(response)
    console.log('-----')
    console.log(body)
    const allCars = body.data;
    const carTitle = allCars[10].title;
    expect(carTitle).toEqual('Fiesta')
    expect(allCars.length).toEqual(23);
    expect(body.status).toEqual('ok'); 
})


test.only ('/cars private request', async({request})=>{

    console.log('----storage state Before------');
    console.log(await request.storageState());
    console.log('----storage state------');
     const authRequest = await request.post('/api/auth/signin',{
        data:{
              "email": users.mainUser.email,
              "password": users.mainUser.password,
              "remember": false
        }
     })


     const response = await request.get('/api/cars');
     const body = await response.json();
     console.log(body)


    console.log('----storage state1------');
    console.log(await request.storageState());
    console.log('----storage state1------');
 });

//(3.7s)
test.describe('Garage API TEST whit athus', ()=>{

test.beforeEach(async({request}) => {

 const authRequest = await request.post('/api/auth/signin',{
        data:{
              "email": users.mainUser.email,
              "password": users.mainUser.password,
              "remember": false
        }
     })
 })

 test('/cars with auth describe', async({request})=>{
    
     console.log('----storage state Before------');
     console.log(await request.storageState());
     console.log('----storage state------');
     const response = await request.get('/api/cars');
     const body = await response.json();
     console.log(body)
     })


     
 test('/cars with auth describe2', async({request})=>{
    
     const response = await request.get('/api/cars');
     const body = await response.json();
     console.log(body)
     })
 })




test.describe('Garage API TEST whit athus before ALL', ()=>{


let sid: string;

test.beforeAll(async({request}) => {

 const authRequest = await request.post('/api/auth/signin',{
        data:{
              "email": users.mainUser.email,
              "password": users.mainUser.password,
              "remember": false
        }
     })

const cookies = authRequest.headers()['set-cookie'];
console.log(authRequest.headers());

if (cookies) {
    const cookieArray = cookies.split('\n');
    for (const cookie of cookieArray) {
        if (cookie.trim().startsWith('sid=')) {
            sid = (cookie.trim().split('=')[1]).split(';')[0];
            break;
        }
    }
} 


 })
 test('/cars with auth describe', async({request})=>{
    
   //  console.log('----storage state Before------');
   //  console.log(await request.storageState());
   //  console.log('----storage state------');
     const response = await request.get('/api/cars', 
        {
            headers: {
                'Cookie' : `sid=${sid}`
            }
        }
      );
     const body = await response.json();
     console.log(body)
     })


     
 test('/cars with auth describe2', async({request})=>{
    
     const response = await request.get('/api/cars', 
        {
            headers: {
                'Cookie' : `sid=${sid}`
            }
        });
     const body = await response.json();
     console.log(body)
     })
 })