import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const Jumbo = (props) => {
    return (
    <div>
        <Jumbotron style={{ background: "#ECF0F1" }}>
          <h1 className="display-3">Pathways Home Animal Rescue</h1>
          <p className="lead">
            Pathways Home Animal Rescue finds great new homes for shelter,
            owner surrender, and stray animals found in the Phoenix, Arizona
            area.
          </p>
          <hr className="my-2" />
          <p>
            Pathways Home Animal Rescue helps reunite lost pets with their
            owners, but also rescues dogs from the County shelters to keep
            them from being euthanized. After receiving any necessary vet
            care and being altered, vaccinated, and microchipped, then we
            find loving homes for the dogs we've rescued from the County
            shelter, as well as for owner surrenders, and for strays when no
            owners are found. All of these wonderful little rescue dogs are
            waiting to meet you We are always in need of fosters,
            volunteers, and people to share our posts -- this is a
            tremendous help in finding homes for the dogs! Donations are
            also so appreciated as there are many times we help dogs who
            need more vet care than the usual spay/neuter. Your donations
            help a dog walk better, or remove a tumor that a previous owner
            should have removed, etc.
          </p>
          <p className="lead">
            <Button color="primary">See adoptions</Button>
          </p>
        </Jumbotron>
      </div>);
};

export default Jumbo;