import React, { useEffect, useState } from 'react';
import './App.css';
import { useForm } from 'react-hook-form';

function App() {
  const { register, handleSubmit } = useForm()
  const [data, setData] = useState([])

  const onSub = (data) => {
    addData(data)
  }

  useEffect(
    () => {
      fetchData()
    }
  )

  const addData = async (news) => {
    const res = await fetch('https://mycurrencyapp-b470c.firebaseio.com/news.json', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...news })
    })
    const data = await res.json()
    console.log(data);
  }


  const fetchData = async () => {
    const res = await fetch('https://mycurrencyapp-b470c.firebaseio.com/news.json')
    const fetchedData = await res.json()

    if (fetchedData) {
      const news = Object.keys(fetchedData).map(key => {
        return {
          id: key,
          ...fetchedData[key]
        }
      })

      setData(news)
    }
  }

  const deleteItem = async (id) => {
    const response = await fetch(`https://mycurrencyapp-b470c.firebaseio.com/news/${id}.json`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    })
    const data = await response.json()
    console.log(data);

  }


  return (
    <div className="App">
      <div className="form">
        <h3 className="formTitle"> Add News </h3>
        <form onSubmit={handleSubmit(onSub)}>
          <label for="title" >News Title</label>
          <input type="text" placeholder="title" name="title" ref={register} className="input" />
          <label for="imgUrl">Image Url</label>
          <input type="text" placeholder="imgUrl" name="imgUrl" ref={register} className="input" />
          <label for="description">Description</label>
          <input type="text" placeholder="escription" name="description" ref={register} className="input" />
          <label for="addDate">Add Date</label>
          <input type="date" placeholder="addDate" name="addDate" ref={register} className="input" />
          <input type="submit" className="submitButton" />
        </form>
      </div>
      <div className="info">
        {
          data.map(v => {
            return (
              <div className="item" key={v.id}>
                <h1 className="dataTitle">{v.title}</h1>
                <img src={v.imgUrl} alt="" className="dataImg" />
                <p className="dataContent">{v.description}</p>
                <button onClick={() => deleteItem(v.id)} className="deleteButton">Delete</button>
                <p className="dataAddData">{v.addDate}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;


