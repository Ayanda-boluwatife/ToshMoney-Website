import React from 'react'

const Header = () => {
  return (
    <Wrapper>
        <div className="container">
            <h1>standard portfolio</h1>
            <div className="tab">
                <button>All Portfolio</button>
                <button>fintech</button>
                <button>education</button>
                <button>SaaS & CRM </button>
                <button>E-commerce</button>
            </div>
        </div>
    </Wrapper>
  )
}

export default Header;