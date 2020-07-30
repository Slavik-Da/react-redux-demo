import React, {useState} from "react";
import styles from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from '../../../assets/images/user.png';
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {

  let [editMode, setEditMode] = useState(false)

  if (!profile) {
    return <Preloader/>
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0])
    }
  }

  const onSubmit = (formData) => {
    saveProfile(formData).then(
      () => {
        setEditMode(false)
      }
    )
  }

  return (
    <div>
      <div className={styles.descriptionBlock}>
        <img src={profile.photos.large || userPhoto} className={styles.mainPhoto}/>
        {isOwner && <div><input type='file' onChange={onMainPhotoSelected}/></div>}

        {editMode
          ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
          : <ProfileData profile={profile} isOwner={isOwner} goToEditMode={() => {
            setEditMode(true)
          }}/>}

        <ProfileStatusWithHooks
          status={status}
          updateStatus={updateStatus}
        />
      </div>
    </div>
  )
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
  return (
    <div>
      {isOwner && <div>
        <button onClick={goToEditMode}>Edit</button>
      </div>}
      <div>
        Full name: {profile.fullName}
      </div>
      <div>
        Looking for a job: {profile.lookingForAJob ? 'yes' : 'no'}
      </div>
      {profile.lookingForAJob &&
      <div>
        My professional skills: {profile.lookingForAJobDescription}
      </div>
      }
      <div>
        <b>About me</b> : {profile.aboutMe}
      </div>
      <div>
        <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
        return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
      })}
      </div>
    </div>
  )
}


const Contact = ({contactTitle, contactValue}) => {
  return <div className={styles.contact}><b>{contactTitle}</b>: {contactValue}</div>
}

export default ProfileInfo;
