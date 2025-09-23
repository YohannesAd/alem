# 📧 Email Setup for Your Website Contact Form

Hi Alem,

Your website contact form is ready, but we need to set up the email functionality so you'll receive consultation requests directly to **alem@amracounseling.com**.

## 🚀 Quick Setup (15 minutes)

### Step 1: Create EmailJS Account
1. Go to: **https://www.emailjs.com/**
2. Click "Sign Up" 
3. Use your Google account or create with email/password
4. Verify email if needed

### Step 2: Connect Your Gmail
1. In EmailJS dashboard → "Email Services"
2. Click "Add New Service" 
3. Select "Gmail"
4. Connect your **alem@amracounseling.com** Gmail account

### Step 3: Create Email Template
1. Go to "Email Templates" → "Create New Template"
2. **Template Name**: `consultation_request`
3. **Subject**: `New Consultation Request from {{from_name}}`
4. **Content** (copy this exactly):

```
New consultation request from your website:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Preferred Contact: {{preferred_contact}}
Preferred Time: {{consultation_time}}

Message:
{{message}}

---
Sent from your website contact form
```

5. Save the template

### Step 4: Get Your Credentials
1. **Service ID**: Email Services → copy your service ID
2. **Template ID**: Email Templates → copy your template ID  
3. **Public Key**: Account → General → copy Public Key

### Step 5: Send Me the Credentials
Please send me these 3 items:
- Service ID: `service_xxxxxxx`
- Template ID: `template_xxxxxxx` 
- Public Key: `xxxxxxxxxxxxxxx`

## ✅ What You'll Receive

When someone submits the contact form, you'll get an email with:
- Their name and email
- Phone number (if provided)
- Preferred contact method
- Preferred consultation time
- Their message

## 🔒 Security
- Free plan: 200 emails/month
- Your email password stays private
- Only public API keys are shared
- Professional service used by thousands

## ❓ Questions?
Call/text me if you need help with any step!

Once you send me the 3 credentials, the contact form will be live and working within minutes.

Thanks!
