import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from './context';
import { ethers } from "ethers";

const { ethereum } = window;

const Input = ({placeholder, name, type, handleForm}) => {
  return (
    <input
      placeholder={placeholder}
      name={name}
      type={type}
      onChange={(e) => handleForm(e, name)}
    />
  );
};

const GetETHExchangeRate = async () => {
  let requestOptions = { method: "GET", redirect: "follow" };
  return fetch(
    "https://api.coinbase.com/v2/exchange-rates?currency=USD",
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => {
      return result.data.rates.ETH;
    })
    .catch((error) => {
      return  error;
    });
};


const Checkout = ({amount}) => {
  const {
    setCart,
    bank,
    HandleBill,
    setFormData,
    handleForm,
    connectWallet,
    currentAccount,
    connectLoader,
    address,
    getContract,
    setTransactionHash,
    setPaymentLoader
  } = useGlobalContext();
  
  
  const sendCrypto = async () => {
    try {
      setPaymentLoader(true);
      if (!ethereum) alert("Please Install Metamask");
      let result = await GetETHExchangeRate();
      let convertedAmount = (amount * result).toFixed(2);
      const parseAmount = ethers.utils.parseEther(convertedAmount.toString());
      
      await ethereum.request({
        method: "eth_sendTransaction",
        params: [
          {
            from: currentAccount,
            to: address,
            gas: "0x5208", //21000 gwei
            value: parseAmount._hex,
          },
        ],
      });
      const transactions = getContract();
      const transactionHash = await transactions.addToBlockchain(
        parseAmount, "payment sent"
      );
      console.log(`Loading... - ${transactionHash.hash}`);
      await transactionHash.wait();
      setTransactionHash(transactionHash);
      setPaymentLoader(false);
      console.log(`Success - ${transactionHash.hash}`);
      setCart([]);
    } catch (error) {
      console.log(error);
    }
  }
  
  const submitForm = () => {
    setFormData({name: "", email: "", address: "", addressTwo: "", city: "", zip: ""})
    setCart([]);
  }
  

  return (
    <div>
      <div className="product-sec">
        <h1 className="text-light">Checkout</h1>
      </div>
      <div className="checkout">
        <h2 className="category-head">BILLING DETAILS</h2>
        <div className="row">
          <form className="col-sm-12 col-lg-6">
            <div className="bg-dark rounded text-light p-3 billing-details">
              <div className="d-flex">
                <div>
                  <input
                    className="form-check-input me-3"
                    type="radio"
                    name="gridRadios"
                    id="gridRadios1"
                    value="bank"
                    onChange={(e) => HandleBill(e.target.value)}
                  />
                </div>
                <span>
                  <h6>DIRECT BANK TRANSFER</h6>
                  <p className="checkout-text">
                    Make your payment directly into our bank account. Please use
                    your Order ID as the payment reference. Your order would not
                    be Shipped until the funds are cleared in our account.
                  </p>
                </span>
              </div>
              <div className="d-flex">
                <div>
                  <input
                    className="form-check-input me-3"
                    type="radio"
                    name="gridRadios"
                    id="gridRadios1"
                    value="crypto"
                    onChange={(e) => HandleBill(e.target.value)}
                  />
                </div>
                <span>
                  <h6>CRYPTO PAYMENT</h6>
                  <p className="checkout-text">
                    Make payment by connecting to a valid crypto wallet address
                    such as Metamask and make payment using you Ethereum
                    account.
                  </p>
                </span>
              </div>
            </div>
          </form>
          <div className="col-sm-12 col-lg-6 mt-5 mt-lg-0">
            <div>
              <form className="row g-3">
                {bank ? (
                  <>
                    <div className="col-md-6">
                      <label htmlFor="inputEmail4" className="form-label">
                        Name
                      </label>
                      <Input
                        placeholder="Name"
                        name="name"
                        type="text"
                        handleForm={handleForm}
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="inputPassword4" className="form-label">
                        Email
                      </label>
                      <Input
                        placeholder="Email"
                        name="email"
                        type="email"
                        handleForm={handleForm}
                      />
                    </div>
                    <div className="col-12">
                      <label htmlFor="inputAddress" className="form-label">
                        Address
                      </label>
                      <Input
                        placeholder="Address"
                        name="address"
                        type="text"
                        handleForm={handleForm}
                      />
                    </div>
                    <div className="col-12">
                      <label htmlFor="inputAddress2" className="form-label">
                        Address 2
                      </label>
                      <Input
                        placeholder="Address 2"
                        name="addressTwo"
                        type="text"
                        handleForm={handleForm}
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="inputCity" className="form-label">
                        City
                      </label>
                      <Input
                        placeholder="City"
                        name="city"
                        type="text"
                        handleForm={handleForm}
                      />
                    </div>
                    <div className="col-md-4">
                      <label htmlFor="inputState" className="form-label">
                        Country
                      </label>
                      <select id="inputState" className="form-select">
                        <option selected>Choose...</option>
                        <option value="Afghanistan">Afghanistan</option>
                        <option value="Åland Islands">Åland Islands</option>
                        <option value="Albania">Albania</option>
                        <option value="Algeria">Algeria</option>
                        <option value="American Samoa">American Samoa</option>
                        <option value="Andorra">Andorra</option>
                        <option value="Angola">Angola</option>
                        <option value="Anguilla">Anguilla</option>
                        <option value="Antarctica">Antarctica</option>
                        <option value="Antigua and Barbuda">
                          Antigua and Barbuda
                        </option>
                        <option value="Argentina">Argentina</option>
                        <option value="Armenia">Armenia</option>
                        <option value="Aruba">Aruba</option>
                        <option value="Australia">Australia</option>
                        <option value="Austria">Austria</option>
                        <option value="Azerbaijan">Azerbaijan</option>
                        <option value="Bahamas">Bahamas</option>
                        <option value="Bahrain">Bahrain</option>
                        <option value="Bangladesh">Bangladesh</option>
                        <option value="Barbados">Barbados</option>
                        <option value="Belarus">Belarus</option>
                        <option value="Belgium">Belgium</option>
                        <option value="Belize">Belize</option>
                        <option value="Benin">Benin</option>
                        <option value="Bermuda">Bermuda</option>
                        <option value="Bhutan">Bhutan</option>
                        <option value="Bolivia">Bolivia</option>
                        <option value="Bosnia and Herzegovina">
                          Bosnia and Herzegovina
                        </option>
                        <option value="Botswana">Botswana</option>
                        <option value="Bouvet Island">Bouvet Island</option>
                        <option value="Brazil">Brazil</option>
                        <option value="British Indian Ocean Territory">
                          British Indian Ocean Territory
                        </option>
                        <option value="Brunei Darussalam">
                          Brunei Darussalam
                        </option>
                        <option value="Bulgaria">Bulgaria</option>
                        <option value="Burkina Faso">Burkina Faso</option>
                        <option value="Burundi">Burundi</option>
                        <option value="Cambodia">Cambodia</option>
                        <option value="Cameroon">Cameroon</option>
                        <option value="Canada">Canada</option>
                        <option value="Cape Verde">Cape Verde</option>
                        <option value="Cayman Islands">Cayman Islands</option>
                        <option value="Central African Republic">
                          Central African Republic
                        </option>
                        <option value="Chad">Chad</option>
                        <option value="Chile">Chile</option>
                        <option value="China">China</option>
                        <option value="Christmas Island">
                          Christmas Island
                        </option>
                        <option value="Cocos (Keeling) Islands">
                          Cocos (Keeling) Islands
                        </option>
                        <option value="Colombia">Colombia</option>
                        <option value="Comoros">Comoros</option>
                        <option value="Congo">Congo</option>
                        <option value="Congo, The Democratic Republic of The">
                          Congo, The Democratic Republic of The
                        </option>
                        <option value="Cook Islands">Cook Islands</option>
                        <option value="Costa Rica">Costa Rica</option>
                        <option value="Cote D'ivoire">Cote D'ivoire</option>
                        <option value="Croatia">Croatia</option>
                        <option value="Cuba">Cuba</option>
                        <option value="Cyprus">Cyprus</option>
                        <option value="Czech Republic">Czech Republic</option>
                        <option value="Denmark">Denmark</option>
                        <option value="Djibouti">Djibouti</option>
                        <option value="Dominica">Dominica</option>
                        <option value="Dominican Republic">
                          Dominican Republic
                        </option>
                        <option value="Ecuador">Ecuador</option>
                        <option value="Egypt">Egypt</option>
                        <option value="El Salvador">El Salvador</option>
                        <option value="Equatorial Guinea">
                          Equatorial Guinea
                        </option>
                        <option value="Eritrea">Eritrea</option>
                        <option value="Estonia">Estonia</option>
                        <option value="Ethiopia">Ethiopia</option>
                        <option value="Falkland Islands (Malvinas)">
                          Falkland Islands (Malvinas)
                        </option>
                        <option value="Faroe Islands">Faroe Islands</option>
                        <option value="Fiji">Fiji</option>
                        <option value="Finland">Finland</option>
                        <option value="France">France</option>
                        <option value="French Guiana">French Guiana</option>
                        <option value="French Polynesia">
                          French Polynesia
                        </option>
                        <option value="French Southern Territories">
                          French Southern Territories
                        </option>
                        <option value="Gabon">Gabon</option>
                        <option value="Gambia">Gambia</option>
                        <option value="Georgia">Georgia</option>
                        <option value="Germany">Germany</option>
                        <option value="Ghana">Ghana</option>
                        <option value="Gibraltar">Gibraltar</option>
                        <option value="Greece">Greece</option>
                        <option value="Greenland">Greenland</option>
                        <option value="Grenada">Grenada</option>
                        <option value="Guadeloupe">Guadeloupe</option>
                        <option value="Guam">Guam</option>
                        <option value="Guatemala">Guatemala</option>
                        <option value="Guernsey">Guernsey</option>
                        <option value="Guinea">Guinea</option>
                        <option value="Guinea-bissau">Guinea-bissau</option>
                        <option value="Guyana">Guyana</option>
                        <option value="Haiti">Haiti</option>
                        <option value="Heard Island and Mcdonald Islands">
                          Heard Island and Mcdonald Islands
                        </option>
                        <option value="Holy See (Vatican City State)">
                          Holy See (Vatican City State)
                        </option>
                        <option value="Honduras">Honduras</option>
                        <option value="Hong Kong">Hong Kong</option>
                        <option value="Hungary">Hungary</option>
                        <option value="Iceland">Iceland</option>
                        <option value="India">India</option>
                        <option value="Indonesia">Indonesia</option>
                        <option value="Iran, Islamic Republic of">
                          Iran, Islamic Republic of
                        </option>
                        <option value="Iraq">Iraq</option>
                        <option value="Ireland">Ireland</option>
                        <option value="Isle of Man">Isle of Man</option>
                        <option value="Israel">Israel</option>
                        <option value="Italy">Italy</option>
                        <option value="Jamaica">Jamaica</option>
                        <option value="Japan">Japan</option>
                        <option value="Jersey">Jersey</option>
                        <option value="Jordan">Jordan</option>
                        <option value="Kazakhstan">Kazakhstan</option>
                        <option value="Kenya">Kenya</option>
                        <option value="Kiribati">Kiribati</option>
                        <option value="Korea, Democratic People's Republic of">
                          Korea, Democratic People's Republic of
                        </option>
                        <option value="Korea, Republic of">
                          Korea, Republic of
                        </option>
                        <option value="Kuwait">Kuwait</option>
                        <option value="Kyrgyzstan">Kyrgyzstan</option>
                        <option value="Lao People's Democratic Republic">
                          Lao People's Democratic Republic
                        </option>
                        <option value="Latvia">Latvia</option>
                        <option value="Lebanon">Lebanon</option>
                        <option value="Lesotho">Lesotho</option>
                        <option value="Liberia">Liberia</option>
                        <option value="Libyan Arab Jamahiriya">
                          Libyan Arab Jamahiriya
                        </option>
                        <option value="Liechtenstein">Liechtenstein</option>
                        <option value="Lithuania">Lithuania</option>
                        <option value="Luxembourg">Luxembourg</option>
                        <option value="Macao">Macao</option>
                        <option value="Macedonia, The Former Yugoslav Republic of">
                          Macedonia, The Former Yugoslav Republic of
                        </option>
                        <option value="Madagascar">Madagascar</option>
                        <option value="Malawi">Malawi</option>
                        <option value="Malaysia">Malaysia</option>
                        <option value="Maldives">Maldives</option>
                        <option value="Mali">Mali</option>
                        <option value="Malta">Malta</option>
                        <option value="Marshall Islands">
                          Marshall Islands
                        </option>
                        <option value="Martinique">Martinique</option>
                        <option value="Mauritania">Mauritania</option>
                        <option value="Mauritius">Mauritius</option>
                        <option value="Mayotte">Mayotte</option>
                        <option value="Mexico">Mexico</option>
                        <option value="Micronesia, Federated States of">
                          Micronesia, Federated States of
                        </option>
                        <option value="Moldova, Republic of">
                          Moldova, Republic of
                        </option>
                        <option value="Monaco">Monaco</option>
                        <option value="Mongolia">Mongolia</option>
                        <option value="Montenegro">Montenegro</option>
                        <option value="Montserrat">Montserrat</option>
                        <option value="Morocco">Morocco</option>
                        <option value="Mozambique">Mozambique</option>
                        <option value="Myanmar">Myanmar</option>
                        <option value="Namibia">Namibia</option>
                        <option value="Nauru">Nauru</option>
                        <option value="Nepal">Nepal</option>
                        <option value="Netherlands">Netherlands</option>
                        <option value="Netherlands Antilles">
                          Netherlands Antilles
                        </option>
                        <option value="New Caledonia">New Caledonia</option>
                        <option value="New Zealand">New Zealand</option>
                        <option value="Nicaragua">Nicaragua</option>
                        <option value="Niger">Niger</option>
                        <option value="Nigeria">Nigeria</option>
                        <option value="Niue">Niue</option>
                        <option value="Norfolk Island">Norfolk Island</option>
                        <option value="Northern Mariana Islands">
                          Northern Mariana Islands
                        </option>
                        <option value="Norway">Norway</option>
                        <option value="Oman">Oman</option>
                        <option value="Pakistan">Pakistan</option>
                        <option value="Palau">Palau</option>
                        <option value="Palestinian Territory, Occupied">
                          Palestinian Territory, Occupied
                        </option>
                        <option value="Panama">Panama</option>
                        <option value="Papua New Guinea">
                          Papua New Guinea
                        </option>
                        <option value="Paraguay">Paraguay</option>
                        <option value="Peru">Peru</option>
                        <option value="Philippines">Philippines</option>
                        <option value="Pitcairn">Pitcairn</option>
                        <option value="Poland">Poland</option>
                        <option value="Portugal">Portugal</option>
                        <option value="Puerto Rico">Puerto Rico</option>
                        <option value="Qatar">Qatar</option>
                        <option value="Reunion">Reunion</option>
                        <option value="Romania">Romania</option>
                        <option value="Russian Federation">
                          Russian Federation
                        </option>
                        <option value="Rwanda">Rwanda</option>
                        <option value="Saint Helena">Saint Helena</option>
                        <option value="Saint Kitts and Nevis">
                          Saint Kitts and Nevis
                        </option>
                        <option value="Saint Lucia">Saint Lucia</option>
                        <option value="Saint Pierre and Miquelon">
                          Saint Pierre and Miquelon
                        </option>
                        <option value="Saint Vincent and The Grenadines">
                          Saint Vincent and The Grenadines
                        </option>
                        <option value="Samoa">Samoa</option>
                        <option value="San Marino">San Marino</option>
                        <option value="Sao Tome and Principe">
                          Sao Tome and Principe
                        </option>
                        <option value="Saudi Arabia">Saudi Arabia</option>
                        <option value="Senegal">Senegal</option>
                        <option value="Serbia">Serbia</option>
                        <option value="Seychelles">Seychelles</option>
                        <option value="Sierra Leone">Sierra Leone</option>
                        <option value="Singapore">Singapore</option>
                        <option value="Slovakia">Slovakia</option>
                        <option value="Slovenia">Slovenia</option>
                        <option value="Solomon Islands">Solomon Islands</option>
                        <option value="Somalia">Somalia</option>
                        <option value="South Africa">South Africa</option>
                        <option value="South Georgia and The South Sandwich Islands">
                          South Georgia and The South Sandwich Islands
                        </option>
                        <option value="Spain">Spain</option>
                        <option value="Sri Lanka">Sri Lanka</option>
                        <option value="Sudan">Sudan</option>
                        <option value="Suriname">Suriname</option>
                        <option value="Svalbard and Jan Mayen">
                          Svalbard and Jan Mayen
                        </option>
                        <option value="Swaziland">Swaziland</option>
                        <option value="Sweden">Sweden</option>
                        <option value="Switzerland">Switzerland</option>
                        <option value="Syrian Arab Republic">
                          Syrian Arab Republic
                        </option>
                        <option value="Taiwan">Taiwan</option>
                        <option value="Tajikistan">Tajikistan</option>
                        <option value="Tanzania, United Republic of">
                          Tanzania, United Republic of
                        </option>
                        <option value="Thailand">Thailand</option>
                        <option value="Timor-leste">Timor-leste</option>
                        <option value="Togo">Togo</option>
                        <option value="Tokelau">Tokelau</option>
                        <option value="Tonga">Tonga</option>
                        <option value="Trinidad and Tobago">
                          Trinidad and Tobago
                        </option>
                        <option value="Tunisia">Tunisia</option>
                        <option value="Turkey">Turkey</option>
                        <option value="Turkmenistan">Turkmenistan</option>
                        <option value="Turks and Caicos Islands">
                          Turks and Caicos Islands
                        </option>
                        <option value="Tuvalu">Tuvalu</option>
                        <option value="Uganda">Uganda</option>
                        <option value="Ukraine">Ukraine</option>
                        <option value="United Arab Emirates">
                          United Arab Emirates
                        </option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="United States">United States</option>
                        <option value="United States Minor Outlying Islands">
                          United States Minor Outlying Islands
                        </option>
                        <option value="Uruguay">Uruguay</option>
                        <option value="Uzbekistan">Uzbekistan</option>
                        <option value="Vanuatu">Vanuatu</option>
                        <option value="Venezuela">Venezuela</option>
                        <option value="Viet Nam">Viet Nam</option>
                        <option value="Virgin Islands, British">
                          Virgin Islands, British
                        </option>
                        <option value="Virgin Islands, U.S.">
                          Virgin Islands, U.S.
                        </option>
                        <option value="Wallis and Futuna">
                          Wallis and Futuna
                        </option>
                        <option value="Western Sahara">Western Sahara</option>
                        <option value="Yemen">Yemen</option>
                        <option value="Zambia">Zambia</option>
                        <option value="Zimbabwe">Zimbabwe</option>
                      </select>
                    </div>
                    <div className="col-md-2">
                      <label htmlFor="inputZip" className="form-label">
                        Zip
                      </label>
                      <Input
                        placeholder="Zip"
                        name="zip"
                        type="text"
                        handleForm={handleForm}
                      />
                    </div>
                  </>
                ) : (
                  <>
                    {currentAccount && 
                    (<div className="col-md-6">
                      <label htmlFor="address" className="form-label">
                        Wallet Address
                        {address && (
                          <p>
                            Sending payment to {address.slice(0, 8)}...
                            {address.slice(-8)}
                          </p>
                        )}
                      </label>
                    </div>)}
                    <div className="d-flex flex-column col-md-6 align-items-center">
                      <label htmlFor="inputPassword4" className="form-label">
                        Amount
                      </label>
                      <div className="fw-bold">${amount}</div>
                    </div>
                  </>
                )}
                <div className="col-12">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="gridCheck"
                    />
                    <label className="form-check-label" htmlFor="gridCheck">
                      Click if you agree to our terms and conditions
                    </label>
                  </div>
                </div>
                <div className="col-12">
                  <div>
                    {bank ? (
                      <Link to={"/orderplaced"}>
                        <button
                          className={"btn rounded px-3 px-lg-4 bg-dark text-light"}
                          onClick={submitForm}
                        >
                          Place Order
                        </button>
                      </Link>
                    ) : (
                      <div>
                        {currentAccount ? (
                          <Link to={"/orderplaced"}>
                            <button
                              className={
                                "btn rounded px-3 px-lg-4 bg-dark text-light"
                              }
                              onClick={sendCrypto}
                            >
                              Place Order
                              <p className="text-danger">
                                {currentAccount.slice(0, 6)}...
                                {currentAccount.slice(-6)}
                              </p>
                            </button>
                          </Link>
                        ) : (
                          <button
                            className={
                              "btn rounded px-3 px-lg-4 bg-dark text-light"
                            }
                            onClick={connectWallet}
                          >
                            {connectLoader ? (
                              <span>Connecting...</span>
                            ) : (
                              <span>Connect</span>
                            )}
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;