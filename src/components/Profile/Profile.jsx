import userData from "../../userData.json";
import css from "./Profile.module.css"

export default function Profile (){
  return (

<div className={css.container}>
      <div>
        <div className={css.image}>
          <img src={userData.avatar} alt={userData.name} width={290} height={290} className={css.imgProfile} />
          </div>
    <p className={css.textName}>{userData.username}</p>
    <p className={css.text}>@{userData.tag}</p>
    <p className={css.text}>{userData.location}</p>
  </div>

  <ul className={css.list}>
    <li className={css.listItem}>
      <span className={css.listText}>Followers </span>
      <span className={css.listText}>{userData.stats.followers}</span>
    </li>
    <li className={css.listItem}>
      <span className={css.listText}>Views </span>
      <span className={css.listText}>{userData.stats.views}</span>
    </li>
    <li className={css.listItem}>
      <span className={css.listText}>Likes </span>
      <span className={css.listText}>{userData.stats.likes}</span>
    </li>
  </ul>
</div>
  );
}
