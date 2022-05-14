
import FaaS from '../Images/FaaS-AWS.jpg'
import FaasArch from '../Images/FaaS-Or-Serverless-Computing-Architecture.png'
import Services from '../Images/Services.jpg'
import InfraMap from '../Images/AWSInfraMap.jpg'
import DeploymentModels from '../Images/CloudDeploymentModels.png' 
function CloudServices() {
  return (
    <div className="App">
<h2>Cloud Computing - Serverless Programming</h2>
<hr></hr>
<div className='NoteContainer'>
<p>
  <h3>What is Cloud Computing, Serverless Computing..</h3>
  Cloud computing is the on-demand delivery of compute power, database, storage, applications, and other IT resources through a cloud services platform via the Internet with pay-as-you-go pricing.

  <h5>There are Four Types of Services available:</h5>
  <ul>
    <li>On Premise Managment</li>
    <li>IaaS</li>
    <li>PaaS</li>
    <li>SaaS</li>
  </ul>

  <hr></hr>
  <img src={Services} alt='Services'></img>
  <hr></hr>
  <h4>On-Premise Managment</h4>
  <hr></hr>
    <p>On-premises software (abbreviated to on-prem, and incorrectly referred to as on-premise)[1] is installed and runs on computers on the premises of the person or organization using the software, rather than at a remote facility such as a server farm or cloud. On-premises software is sometimes referred to as "shrinkwrap" software, and off-premises software is commonly called "software as a service" ("SaaS") or "cloud computing".</p>

  <h4>IaaS</h4>
  <hr></hr>
    <p>Infrastructure as a service (IaaS) is a type of cloud computing service that offers essential compute, storage, and networking resources on demand, on a pay-as-you-go basis.
      Because of its speed of deployment, IaaS is a quick and flexible way to build up and take down development and testing environments. Examples of IaaS include Rackspace, Amazon Web Services (AWS) Elastic Compute Cloud (EC2), Microsoft Azure, Google Compute Engine (GCE) and Joyent.
    </p>

    <h4>PaaS</h4>
  <hr></hr>
    <p>Platform as a service (PaaS) is a cloud computing model where a third-party provider delivers hardware and software tools to users over the internet. Usually, these tools are needed for application development. A PaaS provider hosts the hardware and software on its own infrastructure.
    </p>
      
      <h4>SaaS</h4>
      <hr></hr>
      <p>Software as a service (or SaaS) is a way of delivering applications over the Internet—as a service. Instead of installing and maintaining software, you simply access it via the Internet, freeing yourself from complex software and hardware management.
      </p>

      <h4>FaaS</h4>
      <hr></hr>
      <p>Function as a service (FaaS) is a category of cloud computing services that provides a platform allowing customers to develop, run, and manage application functionalities without the complexity of building and maintaining the infrastructure typically associated with developing and launching an app.Building an application following this model is one way of achieving a "serverless" architecture, and is typically used when building microservices applications.
      </p>
      <img src={FaaS} alt="Function As A Service"></img>
      <hr></hr>
      <h5>Serverless Architecture Flow Chart</h5>
      <hr></hr>
      <img src={FaasArch} alt="Function As A Service"></img>
    </p>

<hr></hr>

<h2>Scopes</h2>
  <hr></hr>
    <p>Define which resources trigger an evaluation for an AWS Config rule. The scope can include one or more resource types, a combination of a tag key and value, or a combination of one resource type and one resource ID. Specify a scope to constrain which resources trigger an evaluation for a rule.</p>
<h4>Expamples:</h4>
  <hr></hr>
    
<p>
<h5>ComplianceResourceId</h5>
  <hr></hr>
    <p>The ID of the only AWS resource that you want to trigger an evaluation for the rule. If you specify a resource ID, you must specify one resource type for ComplianceResourceTypes.</p>
      <div className='codeExample'>
        <ul>
          <li>Type: String</li>
          <li>Length Constraints: Minimum length of 1. Maximum length of 768.</li>
          <li>Required: No</li>
        </ul>
      </div>


<h5>ComplianceResourceTypes</h5>
  <hr></hr>
    <p>The resource types of only those AWS resources that you want to trigger an evaluation for the rule. You can only specify one type if you also specify a resource ID for ComplianceResourceId.</p>
      <div className='codeExample'>
        <ul>
          <li>Type: Array of strings</li>
          <li>Array Members: Minimum number of 0 items. Maximum number of 100 items.</li>
          <li>Length Constraints: Minimum length of 1. Maximum length of 256.</li>
          <li>Required: No</li>
        </ul>
      </div>


<h5>TagKey</h5>
<hr></hr>
<p>The tag key that is applied to only those AWS resources that you want to trigger an evaluation for the rule.</p>
    <div className='codeExample'>
      <ul>
        <li>Type: String</li>
        <li>Length Constraints: Minimum length of 1. Maximum length of 128.</li>
        <li>Required: No</li>
      </ul>
    </div>
<h5>TagValue</h5> 
<hr></hr>
  <p>The tag value applied to only those AWS resources that you want to trigger an evaluation for the rule. If you specify a value for TagValue, you must also specify a value for TagKey.</p>
    <div className='codeExample'>
      <ul>
        <li>Type: String</li>
        <li>Length Constraints: Minimum length of 1. Maximum length of 256.</li>
        <li>Required: No</li>
      </ul>
    </div>
  </p>



</div>
<div className='NoteContainer'>
  Cloud Infrastructure options.
  <p>The Developer or Company or company has the Option on how to set up their server infrastructure by selecting these options below.</p>
  <ul>
    <li>Public Cloud</li>
    <li>On-Premises</li>
    <li>Hybrid</li>
  </ul>
    <hr></hr>
      <h5>Cloud Deployment Models:</h5>
      
  <img src={DeploymentModels} alt='Deployment Models'></img>

</div>
<div className='NoteContainer'>
<h2>AWS Cloud Infrastructure</h2>
<hr></hr>
<h4>Global Infrastructure</h4>
<p>With the cloud, you can expand to new geographic regions and deploy globally in minutes. For example, AWS has infrastructure
  all over the world, so developers can deploy applications in multiple physical locations with just a few clicks. By putting
  your applications in closer proximity to your end users, you can reduce latency and improve the user experience.</p>
  <img src={InfraMap} alt='AWS Global Infrastructur Map'></img>
</div>
</div>    
);
}

export default CloudServices;
