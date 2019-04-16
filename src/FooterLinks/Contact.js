import React from "react";
import { Link } from "react-router-dom";
import iframe from "react-iframe";

//  <div className="container">
// <header id="contact">
//   <h1>Help, please. </h1>
// </header>;
//       <section id="section-a">
//         <h5>
//           <Link to="/shop">
//             <a href="#" class="button">
//               Back to Shopping
//             </a>
//           </Link>{" "}
//           c
//         </h5>
//
//         <p>
//           <h4 class="white-text center">
//             chat with us: If you have a sizing question or need immediate
//             assistance, please click the chat bubble in the lower left hand
//             corner to chat live with a customer service representative. Live
//             Chat is available M-F 8:00 AM - 5:00 PM PST email us:
//             Support@FrankiesBikinis.com call us: (888) 959-0519 wholesale
//             inquiries: Sales@FrankiesBikinis.com
//           </h4>
//         </p>
//       </section>
//     </div>
//   );
// };

const Contact = () => {
  return (
    <div className="container">
      <h1>
        <center>Help, please. </center>
      </h1>
      <section id="contact" class="section section-contact scrollspy">
        <div class="container">
          <div class="row">
            <div class="col s12 m6">
              <div class="card-panel white black-text center">
                <i class="material-icons medium">email</i>
                <h5>Contact Us</h5>
                <p>
                  chat with us: If you have a sizing question or need immediate
                  assistance, please:
                  <ul>
                    <li>email us: Support@alohababe.com </li>
                    <li>call us: (222) 959-0519 </li>
                    <li>wholesale inquiries: Sales@alohababe.com</li>
                  </ul>
                </p>
              </div>

              <h4>Location</h4>
              <ul>
                <li class="collection-item">aloha babe</li>
                <li class="collection-item">4489 Aku Rd</li>
                <li class="collection-item">Hanalei, HI 96714</li>
                <div style={{ float: "right", paddingRight: "5px" }}>
                  <iframe
                    width="80%"
                    height="200"
                    src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=4489%20Aku%20Road%2C%20Hanalei%2C%20HI%2096714+(aloha%20babe)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
                    frameborder="0"
                    scrolling="no"
                    marginheight="0"
                    marginwidth="0"
                  >
                    <a href="https://www.maps.ie/map-my-route/">
                      Draw map route
                    </a>
                  </iframe>
                </div>
              </ul>

              <h4>
                <Link to="/shop">
                  <a href="#" class="button">
                    Back to Shopping
                  </a>
                </Link>
              </h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
