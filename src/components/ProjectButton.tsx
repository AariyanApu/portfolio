export default function ProjectButton({ styles }: { styles: string }) {
  return (
    <button type='button' className={styles}>
      <a className='button_style' href='/archive'>
        View the Archive
      </a>
    </button>
  );
}
