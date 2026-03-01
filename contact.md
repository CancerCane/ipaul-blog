---
layout: page
title: Contact
---

Got a question, feedback, or just want to say hello? Fill out the form below and I'll get back to you.

<form class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  <div class="form-group">
    <label for="name">Name</label>
    <input type="text" id="name" name="name" required placeholder="Your name">
  </div>

  <div class="form-group">
    <label for="email">Email</label>
    <input type="email" id="email" name="_replyto" required placeholder="your@email.com">
  </div>

  <div class="form-group">
    <label for="subject">Subject</label>
    <input type="text" id="subject" name="subject" placeholder="What's this about?">
  </div>

  <div class="form-group">
    <label for="message">Message</label>
    <textarea id="message" name="message" required placeholder="What's on your mind?"></textarea>
  </div>

  <button type="submit">Send Message</button>
</form>

*You can also reach me at [{{ site.contact_email }}](mailto:{{ site.contact_email }}).*
