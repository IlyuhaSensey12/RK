import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export default function Main() {
  return (
    <div>
    <div class="container mt-3">
    <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom shadow rounded-3" style={{ backgroundColor: '#556264' }}>
      <ul class="nav nav-pills">
        <li class="nav-item me-5 bg-white rounded-3"><a href="/" class="nav-link" aria-current="page" style={{color:'#488282',fontWeight:'bold'}}>Welcome Page</a></li>
        <li class="nav-item me-5 rounded-3"><a href="/AddStudent" class="nav-link text-white" style={{color:'#488282',fontWeight:'bold'}}>Add</a></li>
        <li class="nav-item me-5 rounded-3"><a href="/ShowStudents" class="nav-link text-white" style={{color:'#488282',fontWeight:'bold'}}>Show All Students</a></li>
      </ul>
    </header>
    </div>
    </div> 
  )
}
