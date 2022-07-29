import styled, { css } from 'styled-components'

type InputContainerProps = {
  hasError?: boolean
}

const BaseStyle = css`
  height: 2.625rem;
  background: ${(props) => props.theme.colors['base-input']};
  border: 2px solid ${(props) => props.theme.colors['base-button']};
  border-radius: 4px;
`

function applyTemplateArea(id: string, areaGrid?: string) {
  return css`
    div[id='${id}'] {
      grid-area: ${areaGrid || id};
    }
  `
}

export const PurchaseFormContainer = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: 12.5rem 17.25rem 3.75rem;
  grid-template-areas:
    'postal_code null null'
    'street street street'
    'number complement complement'
    'neighborhood city state';
  gap: 0.5rem;

  ${applyTemplateArea('postal_code')}
  ${applyTemplateArea('street')}
  ${applyTemplateArea('number')}
  ${applyTemplateArea('complement')}
  ${applyTemplateArea('neighborhood')}
  ${applyTemplateArea('city')}
  ${applyTemplateArea('state')}
`

export const InputContainer = styled.div<InputContainerProps>`
  input {
    ${BaseStyle}
    width: 100%;
    padding: 0.75rem;
    color: ${(props) => props.theme.colors['base-text']};
    font-family: 'Roboto', sans-serif;
    font-size: ${(props) => props.theme.fonts.text['regular-s'].fontSize};
    font-weight: ${(props) => props.theme.fonts.text['regular-s'].fontWeight};

    ${(props) =>
      props.hasError &&
      css`
        border-color: ${props.theme.colors.red};
      `}

    &::placeholder {
      color: ${(props) => props.theme.colors['base-label']};
    }
  }

  position: relative;

  span {
    position: absolute;
    top: 50%;
    right: 0.5rem;
    transform: translateY(-50%);

    color: ${(props) => props.theme.colors['base-label']};
    font-family: 'Roboto', sans-serif;
    font-weight: 100;
    font-style: italic;
    font-size: 0.75rem;
  }
`

export const SelectContainer = styled.div`
  select {
    ${BaseStyle}
    width: 100%;
    padding-left: 0.25rem;

    color: ${(props) => props.theme.colors['base-label']};

    option {
      color: inherit;
    }
  }
`
