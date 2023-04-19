import React, {useState} from 'react';

export default function FormCheckout({onCheckout}){
    const [userData, setUserData] = useState({
        username: "",
        email: "",
        phone: ""
    });
    console.log("userData", userData);

    function handleInputChange(evt) {
        const inputText = evt.target.value;
        const inputName = evt.target.name;
        // userData["phone"] -> userData.phone
        const newUserData = {...userData};
        newUserData[inputName] = inputText;
        setUserData(newUserData); 
    }
    
    function onSubmit(evt){
      evt.PreventDefault();
      onCheckout(userData);  
    }

    function clearFormData(evt) {
      evt.preventDefault();
      setUserData({
        username: "",
        email: "",
        phone: ""
      });
    }
    
    return (
      <>
        <h3 className="title-center">Ingresa tus datos para completar la compra</h3>
        <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div className='form-group'>
            <label className='label-input'>Nombre</label>
            <input 
              value={userData.username}
              name="username"
              type="text"
              required
              onChange={handleInputChange}
              />
          </div>

          <div className='form-group'>
            <label className='label-input'>Email</label>
            <input 
              value={userData.email}
              name="email"
              type="email"
              required
              onChange={handleInputChange}
              />
          </div>

          <div className='form-group'>
            <label className='label-input'>Telefono</label>
            <input 
              value={userData.phone}
              name="phone"
              type="number"
              required
              onChange={handleInputChange}
              />
          </div>

          <button onClick={onSubmit} type="submit">
            Crear Orden
          </button>

          <button onClick={clearFormData}>
            Cancelar
          </button>

        </form>
      </>
    )
}