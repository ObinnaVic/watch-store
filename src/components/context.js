import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { data } from '../components/data';
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import app from '../firebase';
import validator from 'validator';


const AppContext = React.createContext();

export const ContextApp = ({children}) => {
    const [info, setInfo] = useState(data);
    const [LetterInput, setLetterInput] = useState('');
    const [EmailModal, setEmailModal] = useState(false);
    const [nav, setNav] = useState(false);
    const [cart, setCart] = useState('');
    const [goToCart, setGoToCart] = useState(false);
    const [cartAlert, setCartAlert] = useState(false);
    const [contactModal, setContactModal] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [user, setUser] = useState();
    const navigate = useNavigate();
    const [message, setMessage] = useState("");


    // CREATE ACCOUNT FUNCTION FOR NEW USERS
    const auth = getAuth(app);
    const createAccount = () => {
      if (validator.isEmail(email)) {
        setMessage("Thank you");
      } else {
        setMessage("Please, enter valid Email!");
      }
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          if (user) {
            setUser(user);
            navigate("/");
            setTimeout(() => {
              alert("Success");
            }, 500);
          }
        })
        .catch((error) => {
          const errorCode = error.code;
          alert(errorCode);
        });
    }

    // filter function to filter products between all, female and male
    const filterItems = (category) => {
        if (category === 'all') {
            return setInfo(data);
        }
        const newInfo = data.filter((item) => item.category === category)
        setInfo(newInfo);
    }
    
    // function for the Newsletter input
    const openEmailModal = () => {
        setEmailModal(true);
        setLetterInput('');
    }
    const closeEmailModal = () => {
        setEmailModal(false);
    };

    // Nav fuctionalities
    const openNav = () => {
      setNav(true);
    }

    const closeNav = () => {
      setNav(false);
    };

    // Add to cart function 
    const addCart = (id) => {
      const cartProduct = data.filter((item) => item.id === id);
      setCart([...cart, cartProduct])
      setGoToCart(true);
      setCartAlert(true)
      setTimeout(function() {
        setCartAlert(false);
      }, 1000);
    }

    // Open Contact Form Modal
    const openContactModal = () => {
      setContactModal(true);
    }

    // Close Contact Form Modal
    const closeContactModal = () => {
      setContactModal(false);
    }

    
    
    return (
      <AppContext.Provider
        value={{
          info,
          filterItems,
          LetterInput,
          setLetterInput,
          EmailModal,
          openEmailModal,
          closeEmailModal,
          nav,
          openNav,
          closeNav,
          cart,
          addCart,
          goToCart,
          cartAlert,
          setCart,
          data,
          contactModal,
          openContactModal,
          closeContactModal,
          email,
          setEmail,
          password,
          setPassword,
          name,
          setName,
          confirmPassword,
          setConfirmPassword,
          createAccount,
          user, 
          setUser,
          message,
          setMessage
        }}
      >
        {children}
      </AppContext.Provider>
    );
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

