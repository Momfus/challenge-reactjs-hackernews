import PropTypes from "prop-types";

/**
 * Renders a layout component with a scrollable container and centered content.
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The child elements to be rendered inside the layout.
 * @returns {JSX.Element} - The JSX element representing the layout component.
 */
const Layout = ({ children }) => {
  Layout.propTypes = {
    children: PropTypes.node.isRequired,
  };
  return (
    <div className="block-scroll flex flex-col items-center mt-6">
      {children}
    </div>
  );
};

export default Layout;
