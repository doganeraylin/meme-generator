import React from "react"
import ReactDOM from "react-dom"
import './App.css'
import Header from "./components/Header"
import Form from "./components/Form"


export default function App () {
  return (
    <div className="container">
      <Header />
      <Form />
    </div>
  )
}