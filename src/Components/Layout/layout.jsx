import PropTypes from "prop-types";

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
