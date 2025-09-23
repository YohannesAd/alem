# 📧 EmailJS Setup Instructions

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add Email Service

1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended):
   - **Gmail**: Select "Gmail" and connect your Gmail account
   - **Other**: You can use Outlook, Yahoo, or custom SMTP

## Step 3: Create Email Template

1. Go to "Email Templates" in dashboard
2. Click "Create New Template"
3. Use this template content:

**Template Name**: `consultation_request`

**Subject**: `New Consultation Request from {{from_name}}`

**Content**:
```
New consultation request received from your website:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Preferred Contact: {{preferred_contact}}
Service Interest: {{service_interest}}
Preferred Time: {{consultation_time}}

Message:
{{message}}

---
This email was sent from your website contact form.
```

4. Save the template

## Step 4: Get Your Credentials

1. **Service ID**: Go to "Email Services" → Copy your service ID
2. **Template ID**: Go to "Email Templates" → Copy your template ID  
3. **Public Key**: Go to "Account" → "General" → Copy your Public Key

## Step 5: Update Configuration

Edit `src/config/emailjs.ts` and replace:

```typescript
export const emailjsConfig = {
  serviceId: 'YOUR_ACTUAL_SERVICE_ID',     // Replace with your Service ID
  templateId: 'YOUR_ACTUAL_TEMPLATE_ID',   // Replace with your Template ID
  publicKey: 'YOUR_ACTUAL_PUBLIC_KEY'      // Replace with your Public Key
};
```

## Step 6: Test the Form

1. Run your website: `npm run dev`
2. Go to the Contact page
3. Fill out the form and submit
4. Check alem@amracounseling.com for the email

## 🔒 Security Notes

- EmailJS public key is safe to use in frontend code
- Free plan allows 200 emails/month
- All emails will be sent to: **alem@amracounseling.com**

## 📧 Email Content

When someone submits the form, Alem will receive an email with:

- **Full Name** (required)
- **Email Address** (required)
- **Phone Number** (if provided)
- **Preferred Contact Method** (Email/Phone/Text)
- **Service Interest** (Individual/Family/Couples/Trauma/Other)
- **Preferred Consultation Time** (if provided)
- **Message** (if provided)

## 🚨 Important

**The contact form will NOT work until you complete these setup steps!**

After setup, the form will send real emails to alem@amracounseling.com instead of just showing a fake success message.
