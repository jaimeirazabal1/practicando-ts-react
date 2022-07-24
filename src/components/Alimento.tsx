import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import ReactTooltip from 'react-tooltip';

interface propiedad {
    nombre: string
}

export const Alimento = ({ nombre }: propiedad) => {
    return (
        <InputGroup className="mb-3" >
            <Form.Control
                title={nombre}
                placeholder="Recipient's username"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                data-tip={nombre}
                value={nombre}
                readOnly={true}
            />
            <ReactTooltip />
            <Button variant="outline-secondary">
                Usar
            </Button>
        </InputGroup>
    )
}
