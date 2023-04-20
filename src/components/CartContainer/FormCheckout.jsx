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
      evt.preventDefault();
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
        <br></br>
        <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div className='form-group' style={{ marginBottom: '10px' }}>
            <label className='label-input' style={{ marginRight: '10px' }}>Nombre</label>
            <input 
              value={userData.username}
              name="username"
              type="text"
              required
              onChange={handleInputChange}
              />
          </div>

          <div className='form-group' style={{ marginBottom: '10px' }}>
            <label className='label-input' style={{ marginRight: '10px' }}>Email</label>
            <input 
              value={userData.email}
              name="email"
              type="email"
              required
              onChange={handleInputChange}
              />
          </div>

          <div className='form-group' style={{ marginBottom: '10px' }}>
            <label className='label-input' style={{ marginRight: '10px' }}>Telefono</label>
            <input 
              value={userData.phone}
              name="phone"
              type="number"
              required
              onChange={handleInputChange}
              />
          </div>
          <br></br>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <button onClick={onSubmit} type="submit" style={{ borderRadius: "5px", backgroundColor: "#5bc1a6", marginLeft: "10px", padding: 8 }}>
              Crear Orden
            </button>

            <button onClick={clearFormData} style={{ borderRadius: "5px", backgroundColor: "#ffce55", marginLeft: "10px", padding: 8 }}>
              Cancelar
            </button>
          </div>
        </form>
      </>
    )
}