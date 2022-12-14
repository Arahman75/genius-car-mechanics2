import React from 'react';

const Expert = ({expert}) => {
    const {name, img} = expert;
    return (
      
<div class="card col-sm-12 col-md-6 col-lg-4 g-5 gx-5">
  <img class="card-img-top" src={img} alt=".."/>
  <div class="card-body">
    <h5 class="card-title">{name}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

     
    );
};

export default Expert;