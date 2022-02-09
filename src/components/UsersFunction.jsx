import React, {useState, useEffect} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import axios from 'axios';

function UserFunction() {
  const [users, setUsers] = useState([]);
  
  async function getData() {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  
  useEffect(() => {
    getData();
  
  }, []);
  
  return (
  <>
  <Container>
    <Row className='mt-3'>
      <Col md={6} className='mx-auto'>
        <h1 className='text-center text-info mb-4'> Display The Name, Username & Email Of Users</h1>
        {users.map((user) => {
          return <h4 className='border p-3'><span className='text-primary'>Name:</span> {user.name} <br/> <span className='text-danger'>Username:</span> {user.username} <br /> <span className='text-success'>Email:</span> {user.email}</h4>;
      })}
      </Col>
    </Row>
  </Container>
  </>
  );
};

export default UserFunction;