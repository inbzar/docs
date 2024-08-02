---
sidebar_position: 1
description: 'Real-Time Customer Chat with Store Owners'
---

# Overview

The Customer Chat feature enables real-time communication between customers and store owners. Engage in instant conversations to address inquiries, resolve issues, and provide personalized support directly from your store's platform, enhancing the overall customer experience.

---

## View List of Messages

You can view the list of available messages in your ecommerce store by clicking on Chat from the sidebar menu.

In the list, you can see chats and their messages.

![InBzar chat feature](/img/chat.png)

---

## Integrate Third Party Chat

This chat feature is lightweight and easy to manage, providing basic functionality for your store. If you require advanced live chat features, you can integrate third-party live chat widgets into your storefront. For example, you can use a free service like [Tawk.io](https://tawk.io), which offers a robust live chat widget. To integrate it, create an account on [Tawk.io](https://tawk.io), and they will provide you with a **script** code.

The script code should look like this.

```js
<!-- Start of Tawk.to Script -->
<script type="text/javascript">
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
    var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
    s1.async=true;
    s1.src='https://embed.tawk.to/YOUR_PROPERTY_ID/DEFAULT';
    s1.charset='UTF-8';
    s1.setAttribute('crossorigin','*');
    s0.parentNode.insertBefore(s1,s0);
})();
</script>
<!-- End of Tawk.to Script -->
```

To implement this script, contact our developer support and let them know you want to integrate it into your store. They will do this for you at no cost. We don't offer this feature directly and require a developer's assistance to avoid potential security risks. Pasting scripts can pose security threats, and many store owners may not understand the risks of integrating unknown code, which could lead to sensitive information, such as credit card or password details, being compromised. Our professional developers ensure the code is secure before implementing it on your storefront. This service is completely free from InBzar.
