import { test } from '@playwright/test';


export const userInfoTest = test.extend({

    userInfo: async({page}, use) => {

        const userInfo = { 
           email: 'MPyshnyi@testtest.com',
           pass: 'Pepka019520!'    
        }

        console.log('Fixture before')
        await  use(userInfo)
        console.log('Fixtures after ')
    }
})