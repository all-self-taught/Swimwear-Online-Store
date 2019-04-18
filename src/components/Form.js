import React from "react";
import { Link } from "react-router-dom";

const Form = () => {
  return (
    <div class="contact-form form-vertical">
      <form
        method="post"
        action="/contact#contact_form"
        id="contact_form"
        accept-charset="UTF-8"
        class="contact-form"
      >
        <input type="hidden" name="form_type" value="contact" />
        <input type="hidden" name="utf8" value="✓" />

        <div class="grid grid--half-gutters">
          <div class="grid__item medium-up--one-half">
            <label for="ContactFormName">Name</label>
            <input
              type="text"
              id="ContactFormName"
              name="contact[name]"
              value=""
            />
          </div>
          <div class="grid__item medium-up--one-half">
            <label for="ContactFormEmail" class="">
              Email
            </label>
            <input
              type="email"
              id="ContactFormEmail"
              name="contact[email]"
              autocorrect="off"
              autocapitalize="off"
              value=""
              class=""
            />
          </div>
        </div>

        <label for="ContactFormPhone">Phone Number</label>
        <input
          type="tel"
          id="ContactFormPhone"
          name="contact[phone]"
          pattern="[0-9\-]*"
          value=""
        />

        <label for="ContactFormMessage">Message</label>
        <textarea
          rows="10"
          id="ContactFormMessage"
          name="contact[body]"
          required=""
        />

        <input type="submit" class="btn" value="Send" />
      </form>
    </div>
  );
};

export default Form;
