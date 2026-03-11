import { Page, expect } from '@playwright/test';

export class FinalPage {
    constructor(private page: Page) {}

    async verifyFinalPage() {
        await expect(this.page.getByRole('heading', { name: 'Congratulations!' })).toBeVisible();
        await expect(this.page.getByRole('main')).toContainText('You\'ve completed all 74 questions successfully.');
        await expect(this.page.getByRole('img', { name: 'Congratulations' })).toBeVisible();
        await expect(this.page.getByRole('main')).toContainText('Your responses have been recorded and analyzed to generate your personalized personality profile.');
        await expect(this.page.getByRole('main')).toContainText('Click the button below to view your detailed results and get your comprehensive report.');
        await expect(this.page.getByRole('button')).toContainText('View Your Results');
        await expect(this.page.getByRole('button', { name: 'View Your Results' })).toBeVisible();
        await expect(this.page.getByRole('link')).toContainText('← Back to Home');
        await this.page.getByRole('button', { name: 'View Your Results' }).click();

    }};

    //     await expect(page.locator('h3')).toContainText('Complete Your Profile');
    //     await expect(page.getByRole('main')).toContainText('To send you your personalized report, please provide the following information.');
    //     await expect(page.getByRole('textbox', { name: 'First Name *' })).toBeVisible();

    //     await page.getByRole('textbox', { name: 'Last Name *' }).click();
    //     await page.getByRole('textbox', { name: 'Email Address * Country *' }).click();
    //     await page.getByRole('combobox').filter({ hasText: 'Select a country' }).click();
    //     await page.getByLabel('🇺🇸United States').getByText('🇺🇸United States').click();
    //     await page.getByRole('combobox').filter({ hasText: 'Select your field of work or' }).click();
    //     await page.getByRole('option', { name: 'Data Science / Analytics /' }).click();
    //     await page.getByRole('combobox').filter({ hasText: 'Select your job level' }).click();
    //     await page.getByRole('option', { name: 'Mid Level Professional' }).click();
    //     await page.getByRole('combobox').filter({ hasText: 'Select your gender' }).click();
    //     await page.getByRole('option', { name: 'Male', exact: true }).click();
    //     await page.getByRole('combobox').filter({ hasText: 'Select your birth year range' }).click();
    //     await page.getByRole('option', { name: '– 1980' }).click();
    //     await expect(page.locator('form')).toContainText('Data Privacy Disclaimer *Your responses to this assessment are confidential and will be used only for professional development and research purposes. Results are reported in aggregate and will not identify you personally. By continuing, you consent to the collection and analysis of your responses in accordance with applicable data protection laws. Your information will not be shared with third parties without your permission.I understand and accept the data privacy terms');
    // }
    // await page.getByRole('checkbox', { name: 'I understand and accept the' }).click();
    // await page.getByText('First Name *Last Name *Email').click();
    // await page.getByRole('button', { name: 'Submit and Get Report' }).click();
    // await expect(page.getByRole('link')).toContainText('← Back to Home');
    // await page.getByText('First Name *Last Name *Email').click();
    // await page.getByText('First Name *Last Name *Email').click();

    // await page.getByRole('textbox', { name: 'First Name *' }).click();Bhanuka
    // await page.getByRole('textbox', { name: 'Last Name *' }).click();
    // await page.getByRole('textbox', { name: 'Last Name *' }).fill('Dhananjaya');
    // await page.getByRole('textbox', { name: 'Email Address * Country *' }).click();
    // await page.getByRole('textbox', { name: 'Email Address * Country *' }).fill('bhanurandeni@gmail.com');
    // await page.getByText('First Name *Last Name *Email').click();
    // await page.getByText('First Name *Last Name *Email').click();
    // await page.getByText('First Name *Last Name *Email').click();
    // await page.getByRole('button', { name: 'Submit and Get Report' }).click();
    // await expect(page.getByRole('button')).toContainText('Submit and Get Report');
    // await page.getByRole('button', { name: 'Submit and Get Report' }).click();
    // await page.getByRole('link', { name: '← Back to Home' }).click();

    // await page.getByRole('link', { name: 'Uni' }).click();
    // await page.getByRole('button', { name: 'See Results' }).click();
    // await page.getByRole('button', { name: 'View Your Results' }).click();
    // await page.getByRole('textbox', { name: 'First Name *' }).click();
    // await page.getByRole('textbox', { name: 'First Name *' }).fill('Bhanuka');
    // await page.getByRole('textbox', { name: 'Last Name *' }).click();
    // await page.getByRole('textbox', { name: 'Last Name *' }).fill('Dhananjaya');
    // await page.getByRole('textbox', { name: 'Email Address *' }).click();
    // await page.getByRole('textbox', { name: 'Email Address *' }).fill('bhanurandeni@gmail.com');
    // await page.getByRole('combobox').first().click();
    // await page.getByLabel('IT / Software Development /').getByText('IT / Software Development /').click();
    // await page.getByRole('combobox').filter({ hasText: 'Select your field of study' }).click();
    // await page.getByLabel('Construction / Civil').getByText('Construction / Civil').click();
    // await page.getByRole('combobox').filter({ hasText: 'Select your gender' }).click();
    // await page.getByRole('option', { name: 'Male', exact: true }).click();
    // await page.getByRole('combobox').filter({ hasText: 'Select your birth year range' }).click();
    // await page.getByRole('option', { name: '1981 - 1996' }).click();
    // await page.getByRole('textbox', { name: 'Year *' }).click();
    // await page.getByRole('textbox', { name: 'Year *' }).fill('3');
    // await expect(page.locator('h4')).toContainText('Data Privacy Disclaimer *');
    // await expect(page.locator('form')).toContainText('Your responses to this assessment are confidential and will be used only for professional development and research purposes. Results are reported in aggregate and will not identify you personally. By continuing, you consent to the collection and analysis of your responses in accordance with applicable data protection laws. Your information will not be shared with third parties without your permission.');
    // await expect(page.locator('form')).toContainText('I understand and accept the data privacy terms');
    // await page.getByRole('checkbox', { name: 'I understand and accept the' }).click();
    // await page.getByText('First Name *Last Name *Email').click();