import React from "react";
import { MDBCol } from "mdbreact";
import { Table, Button}  from 'react-bootstrap';

function Search  ()  {
  return (
    <MDBCol md="6">
      <div className="active-pink-3 active-pink-4 mb-6">
        <input className="form-control" type="text" placeholder="Search" aria-label="Search" />
        <Button variant="primary">
            Search
        </Button>
      </div>
    </MDBCol>
  );
}

export default Search;