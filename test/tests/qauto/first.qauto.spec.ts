import { test, expect } from '@playwright/test';
import { link } from 'fs';

test('has title', {tag: '@regression'},  async ({ page }) => {
  await page.goto('/');
  // Expect a title "to contain" a substring.
  const header = page.locator('.header');
  const singnINBtn = header.getByRole('button', { name : 'Sign in'})
  const modal = page.locator('.modal-content')
  const registrationBtn =  modal.getByRole('button', {name : 'Registration'} )
  const nameModal = modal.getByLabel('Name')
  const nameLastName = modal.locator('#signupLastName')
  const emailInput = modal.locator('input[name="email"]') 


  await singnINBtn.click();
  await registrationBtn.click();
  await nameModal.fill('Jhon');
 
  await nameLastName.pressSequentially('sfsfsfsfs' );
  await emailInput.fill('test@test.com')

   
  await emailInput.blur(); 

  await expect(page.getByText('Email required')).toBeVisible

  await page.pause();
});

test('check buttons', async({page})=>{
  await page.goto('/');
  const header = page.locator('.header')
  const headerButtons = header.getByRole('button')

  // Non-retrying assertions
  const count = await headerButtons.count()
  console.log('BUTTONS COUNT', count)
  expect(count).toBe(4)
  const lastBtnText = await headerButtons.last().innerText()
  expect(lastBtnText).toBe('Sign In')

  // Auto-retrying assertions
  await expect.soft(headerButtons).toHaveCount(5)
  await expect.soft(headerButtons.last()).toHaveText(/sign in/i, {ignoreCase: true})

})

test('check layout', async({page})=>{
  await page.goto('/');
  const header = page.locator('.header')
  const signInBtn = header.getByRole('button', {name: 'Sign in'})
  const modal = page.locator('.modal-content')
  await signInBtn.click()
  await expect(modal).toHaveScreenshot('sign-in-modal.png')
})

