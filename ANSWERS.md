-What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.

    -PropTypes are used to check data or, more specifically, props as they are passed down through our app's components. It's important to type check our data in JS because it allows us and future developers working with our application to easily catch bugs related to props thanks to descriptive error messages in the console.

-Describe a life-cycle event in React?

    -To understand life-cycle events in React, it is important to understand that a component's life-cycle is simply a set of phases which the component experiences: mounting, updating, unmounting. During these phases, we have events that occur at specific times. For example, the componentDidUpdate event is part of the mounting phase and will always be invoked immediately after the render method is called.

-Explain the details of a Higher Order Component?

    -Higher order components reuse component logic. Simply, they are functions that take a component and returns a new component. So instead of rendering data to the UI, HOC's abstracts complexity and allows us to store similar component logic in a single place and later share it across many components.

-What are three different ways to style components in React? Explain some of the benefits of each.

    -External style sheet, inline styles, or Styled Components. External style sheets allow you to have a separate file for each component. Inline styles allow for quick styling in the same file as the component. The styled components library allows you to use a mixture of CSS and JS to create component-level styles that, to me, are clean and legible.