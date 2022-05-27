
function FormAboutYou( {object, getObject, setCounterNext} ) {
  return (
    <div>
        First name: <input value={object.fname} type='text' onInput={el => getObject({...object, fname: el.target.value})}></input><br></br><br></br>
        Last name: <input value={object.lname} type='text' onInput={el => getObject({...object, lname: el.target.value})}></input><br></br><br></br>
        Phone: <input value={object.phone} type='text' onInput={el => getObject({...object, phone: el.target.value})}></input><br></br><br></br>
        Email: <input value={object.email} type='text' onInput={el => getObject({...object, email: el.target.value})}></input><br></br><br></br>
        Address: <input value={object.address} type='text' onInput={el => getObject({...object, address: el.target.value})}></input><br></br><br></br>
        Gender: <input value={object.gender} type='text' onInput={el => getObject({...object, gender: el.target.value})}></input><br></br><br></br>
        <input onClick={setCounterNext} type='button' value='next'></input>
    </div>
  );
}

export default FormAboutYou;
