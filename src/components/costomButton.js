function CustomButton() {
  const [foo, setFoo] = useState(0);
  const handleClick = () => setFoo((foo) => foo + 1);
  return (
    <button className="custom-button" onClick={handleClick}>
      Click me {foo}
    </button>
  );
}
