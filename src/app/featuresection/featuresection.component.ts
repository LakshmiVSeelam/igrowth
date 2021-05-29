import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-featuresection',
  templateUrl: './featuresection.component.html',
  styleUrls: ['./featuresection.component.css']
})
export class FeaturesectionComponent implements OnInit {
  pagetitle = ''
  colors = ["#5ebed9", "#001854", "#eea11d", "#b42251"]
  features = [
    {"id": 1, "name": "Search Engine Optimization", "desc": "Are you facing any problems in increasing traffic to your site and tackling SEO?. Our SEO services are here to break them. We have a lot of experience in helping clients victoriously by expanding their web traffic, ensuring more visitors and providing certified business leads.", "img": "assets/img/feature/seo_bg.png", "bg_img": "assets/img/feature/seo.png", "bg_class": "green"},
    {"id": 2, "name": "Search Engine Marketing", "desc": "It's time to upgrade your ranking on all search engines through our SEM services. With our extremely proficient search engine marketers and virtual partners get your ads ahead of your customers in the most attainable and prosperous system. Obtain sterling assistant as your beginner pack with perfect google ad plan and A/B testing. We build and implement the most ideal personalized strategy to bring you improved ranking in leading search engines. Instant results and conversion are provided by clutching your customer's attention with targeted advertising. We constantly analyse, access and track all active campaigns to refine the results.", "img": "assets/img/feature/sem_bg.png", "bg_img": "assets/img/feature/sem.png", "bg_class": "red"},
    {"id": 3, "name": "Social Media Promotion", "desc": "In the world of marketing, start utilizing the new form of communications like Facebook, LinkedIn, YouTube, Twitter, Instagram etc with our social media promotions. Our promotions are major lead generators as it constantly brings high volume traffic to your website. We enlarge your digital exposure by collaborating in social networks that can significantly increase your online presence. Expand your sales with our promotions to reach a new audience that leads to the expansion of your customer base. We showcase your brand for creating brand awareness to build new sales. We have a lot of experience to take complete responsibility for your social presence.", "img": "assets/img/feature/smp_bg.png", "bg_img": "assets/img/feature/smp.png", "bg_class": "navy"},
    {"id": 4, "name": "Web Design and Development", "desc": "Obtain customized solutions through our web designing. We develop it technically by turning visitors into your customers. Our website attribute control plans testing usability, security testing and testing the functionality of all links. Analysing the assembled information by identifying your website purpose and objectives in the target audience is our mission. We start with strategy and organization to build quality websites for our clients. We assure you that the bugs are fixed and you will get the latest updates. Get the user friendly and fast loading designs from us. Customer-centric solutions are provided through designing by our committed web development team.", "img": "assets/img/feature/web_bg.png", "bg_img": "assets/img/feature/web.png", "bg_class": "red"},
    {"id": 5, "name": "Email Marketing", "desc": "The whole process of sorting, capturing and optimizing the database is taken care of by our team. We can eradicate domain and idle users based on their past campaign response and website activity. We provide an A/B test based on varied subject lines, correct timings and sender name. We examine to see if calls to action in the mail are working. For smooth functioning, we avoid manual intervention. With our email marketing services, you can segment your customers. We will together control the entire email marketing campaign. We instinctively target the winning mail to the rest on the list sent.", "img": "assets/img/feature/email_bg.png", "bg_img": "assets/img/feature/email.png", "bg_class": "navy"},
    {"id": 6, "name": "Digital Consultation", "desc": "Make your digital marketing strategy on the right track through our digital consultancy services. We provide SEO, SEM, social media promotion, web design, web development and email marketing services. We execute the right technology to digitize your operations. Get high quality digital marketing solutions. Using various marketing strategies we make your products and brands recognisable. Build your identity, faith, target customers by accelerating your growth and Creating unique experiences with us. Your amazing benefit goes with our results. Make yourself free from scuffling to get enough sales for your business by choosing our agency. Let's boost your sales online. ", "img": "assets/img/feature/dc_bg.png", "bg_img": "assets/img/feature/dc.png", "bg_class": "green"},
    {"id": 7, "name": "Strategy and Growth", "desc": "In this global competition, we provide you with a new type of growth strategy. Our digital marketing strategy is a plan of action to achieve your business goals. If your business strategy is lacking in a specific area then it's time to fix it with our strategy and growth services. We come up with a chance to obtain you a high powered targeting of a detailed audience with custom ad campaigns. To make your company's work more effective our team takes advantage of all valuable marketing assets and technologies. Gain balanced scorecards like financial, internal, customer, innovation and cost-cutting strategies digitally with us.", "img": "assets/img/feature/stratergy_bg.png", "bg_img": "assets/img/feature/stratergy.png", "bg_class": "navy"},
    {"id": 8, "name": "Event Marketing", "desc": "Make successful partnerships with our professional event marketing services. We add life to your events digitally. We help you to target your audience with a variety of digital marketing services. We have been able to build a secure and peculiar network. With our experienced marketing services, you can have enormous families viewing your virtual events. Connecting to each consumer by engaging you with an individual experience is our vision. With a team of consultancy experts, we are being the best in the use of technology in organizing events. Obtain Streamline workflows with customizable approval routing marketing hassle-free events with us.", "img": "assets/img/feature/event_bg.png", "bg_img": "assets/img/feature/event.png", "bg_class": "green"}
  ]
  
  
  
  // tab_action(i){
  //   this.active_tab = i
  // }

  show_full_content(ele){
    ele['show_more'] = true
  }

  hide_full_content(ele){
    ele['show_more'] = false
  }

  constructor( private titleService:Title) { 
    
  }

  ngOnInit(): void {
    this.pagetitle = this.titleService.getTitle()
    this.features = this.pagetitle == 'Home | Igrowth' ? this.features.slice(1,4) : this.features
    this.features.forEach(ele => {
      ele['show_more'] = false
    });
  }

}
