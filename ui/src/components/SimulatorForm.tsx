import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/Spinner';
import useFormInput from 'hooks/useFormInput';

export interface SimulatorFormData {
  operatorsQty: number;
  hoursPerJob: number;
  effectiveness: number;
}

interface Props {
  isLoading: boolean;
  onSubmit(form: SimulatorFormData): void;
}

function SimulatorForm({ isLoading, onSubmit }: Props) {
  const operatorsQty = useFormInput(5);
  const hoursPerJob = useFormInput(2);
  const effectiveness = useFormInput(100);

  const onSimulateClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    const formData: SimulatorFormData = {
      operatorsQty: operatorsQty.value || 0,
      hoursPerJob: hoursPerJob.value || 0,
      effectiveness: effectiveness.value || 0,
    };
    onSubmit(formData);
  };
  return (
    <Form>
      <Form.Group controlId="operatorsQty">
        <Form.Label>Cantidad de operadores</Form.Label>
        <Form.Control
          type="number"
          placeholder="Cantidad de operadores"
          min="1"
          step="1"
          required
          {...operatorsQty}
        />
      </Form.Group>

      <Form.Group controlId="hoursPerJob">
        <Form.Label>Tiempo por trabajo</Form.Label>
        <Form.Control
          type="number"
          placeholder="Tiempo por trabajo"
          min="1"
          step="1"
          disabled
          required
          {...hoursPerJob}
        />
      </Form.Group>

      <Form.Group controlId="effectiveness">
        <Form.Label>Efectividad de colaborador</Form.Label>
        <Form.Control
          type="number"
          placeholder="Efectividad de colaborador"
          min="1"
          max="100"
          step="1"
          disabled
          required
          {...effectiveness}
        />
      </Form.Group>

      {!isLoading ? (
        <Button variant="primary" type="button" onClick={onSimulateClick}>
          Simular
        </Button>
      ) : (
        <Button variant="primary" disabled>
          <Spinner
            as="span"
            animation="grow"
            size="sm"
            role="status"
            aria-hidden="true"
          />
          Loading...
        </Button>
      )}
    </Form>
  );
}

export default SimulatorForm;
