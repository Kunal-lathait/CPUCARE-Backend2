const express=require("express");
const router=express();
const serviceController=require("../controller.js/services");

router.get("/Windows-Installation",serviceController.windowsInstallation);

router.get("/PC-Laptop-Update",serviceController.PCLaptopUpdate);

router.get("/Software-Installation",serviceController.softwareInstalltion);

router.get("/Website-Designing",serviceController.webDesigning);

router.get("/Data-Recovery",serviceController.dataRecovery);

router.get("/Remote-Support",serviceController.remoteSupport);

router.get("/Windows-Installation-Update",serviceController.windowsInstallationandUpdate);

router.get("/Software-Installation-Remote-Support",serviceController.softwareInstalltionandRemoteSupport);

router.get("/Windows-Installtion-Recovey",serviceController.windowsInstallationandRecovery);

router.get("/website-Designing-Antivirus-Update",serviceController.websiteDesigningandAntivirusUpdate);





module.exports=router;