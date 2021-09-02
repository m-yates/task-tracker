import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header>
      <h1>{title}</h1>
      {showAdd ? (
        <Button text={"close"} onClick={onAdd} />
      ) : (
        <Button text={"add"} onClick={onAdd} />
      )}
    </header>
  );
};

export default Header;
