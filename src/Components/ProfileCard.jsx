

const ProfileCard = ({name,age,bio}) => {
  return (
 <>
<div className=" ">
<div className="hover:bg-gray-600 p-4 border border-s-1 border-yellow-600  text-center hover:text-white">
  {name}{age}{bio}
  </div>
</div>

 
 


 </>

  )
}

export default ProfileCard