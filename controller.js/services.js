const windowsInstallation=(req,res)=>{
    res.render("servicePages/servicePage1.ejs");
}
const PCLaptopUpdate=(req,res)=>{
    res.render("servicePages/servicePage2.ejs");
}
const softwareInstalltion=(req,res)=>{
    res.render('servicePages/servicePage3.ejs');
}

const webDesigning=(req,res)=>{
    res.render('servicePages/servicePage4.ejs');
}
const dataRecovery=(req,res)=>{
    res.render('servicePages/servicePage5.ejs');
}
const remoteSupport=(req,res)=>{
    res.render('servicePages/servicePage6.ejs');
}
const windowsInstallationandUpdate=(req,res)=>{
    res.render('servicePages/servicePage7.ejs');
}
const softwareInstalltionandRemoteSupport=(req,res)=>{
    res.render('servicePages/servicePage8.ejs');
}
const windowsInstallationandRecovery=(req,res)=>{
    res.render('servicePages/servicePage9.ejs');
  
}
const  websiteDesigningandAntivirusUpdate=(req,res)=>{
    res.render('servicePages/servicePage10.ejs');

}



module.exports={
    windowsInstallation,
    PCLaptopUpdate,
    softwareInstalltion,
    webDesigning,
    dataRecovery,
    remoteSupport,
    windowsInstallationandUpdate,
    softwareInstalltionandRemoteSupport,
    windowsInstallationandRecovery,
    websiteDesigningandAntivirusUpdate,
}