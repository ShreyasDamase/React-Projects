 import "./topbar.css"
 import { Search, Person , Chat, Notifications ,Diversity2} from '@mui/icons-material';
 export default function Topbar() {
  return (
<div className="topbarContainer">
<div className="topbarLeft">
  <span className="logo">
    <div className="logoImage">  <Diversity2/></div>
  <div className="logoText">socailmedia</div>
    </span>
</div>


<div className="topbarCenter">  
  <div className="searchbar">
    <div className="searchIcon"><Search /></div>
    
    <input placeholder="Search for friend, post or video" className="serchInput" />
  </div>
</div>

<div className="topbarRight">
  <div className="topbarLinks">
    <span className="topbarLinks">Home</span>
    <span className="topbarLinks">Timeline</span>
  </div>
  <div className="topbarIcons">

    
  <div className="topbarIconItem"><Person/>
  <span className="topbarIconBadge">1</span>
  </div>
  <div className="topbarIconItem"><Chat/>
  <span className="topbarIconBadge">2</span>
  </div>
  <div className="topbarIconItem"><Notifications/>
  <span className="topbarIconBadge">1</span>
  </div>
  </div>
<img src="/assets/person/1.jpg" alt="profile" className="topbarImage" />
</div>

</div>  )
}
