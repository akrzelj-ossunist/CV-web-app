import './css/aboutYou.css'

function FormAboutYou( {object, getObject, setCounterNext} ) {
  return (
    <div className='main'>
      <form>
          <div>
              <label>First name: </label>
              <input value={object.fname} type='text' onInput={el => getObject({...object, fname: el.target.value})}></input>
          </div>
          <div>
              <label>Last name: </label>
              <input value={object.lname} type='text' onInput={el => getObject({...object, lname: el.target.value})}></input>
          </div>
          <div>
              <label>Phone: </label>
              <input value={object.phone} type='text' onInput={el => getObject({...object, phone: el.target.value})}></input>
          </div>
          <div>
              <label>Email: </label>
              <input value={object.email} type='text' onInput={el => getObject({...object, email: el.target.value})}></input>
          </div>
          <div>
              <label>Address: </label>
              <input value={object.address} type='text' onInput={el => getObject({...object, address: el.target.value})}></input>
          </div>
          <div>
              <label>Gender: </label>
              <input value={object.gender} type='text' onInput={el => getObject({...object, gender: el.target.value})}></input>
          </div>
          <button onClick={setCounterNext} value='next'>Next</button>
      </form>
         
         
        
         
         
         
        
    </div>
  );
}

export default FormAboutYou;
