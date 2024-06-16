import css from "./Profile.module.css"

export default function Profile({name, tag, location, image, stats }) {
  return (

<div className={css.container}>
      <div>
        <div className={css.image}>
          <img src={image} alt={name} width={290} height={290} className={css.imgProfile} />
          </div>
    <p className={css.textName}>{name}</p>
    <p className={css.text}>@{tag}</p>
    <p className={css.text}>{location}</p>
  </div>

  <ul className={css.list}>
    <li className={css.listItem}>
      <span className={css.listText}>Followers </span>
      <span className={css.listText}>{stats.followers}</span>
    </li>
    <li className={css.listItem}>
      <span className={css.listText}>Views </span>
      <span className={css.listText}>{stats.views}</span>
    </li>
    <li className={css.listItem}>
      <span className={css.listText}>Likes </span>
      <span className={css.listText}>{stats.likes}</span>
    </li>
  </ul>
</div>
  );
}
