export default function ProjectButton({ styles }) {
  return (
    <button type="button" className={styles}>
      <a className="button_style" href="/archive">
        View the Archive
      </a>
    </button>
  );
}
