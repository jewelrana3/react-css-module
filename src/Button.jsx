export default function Button({ text, link }) {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      {text}
    </a>
  );
}
