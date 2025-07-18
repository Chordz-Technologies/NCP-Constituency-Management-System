import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  selectedCity: string = 'Khadakwasla'; // Default selected city

  cityInfo: { name: string, imageUrl: string, description: string } | null = null;

  ngOnInit(): void {
    this.displayCityInfo(this.selectedCity); // Display default city information on component initialization
  }


  displayCityInfo(city: string): void {
    this.selectedCity = city;
    
    switch (city) {
      case 'Khadakwasla':
        this.cityInfo = {
          name: 'Khadakwasla Taluka',
          imageUrl: './assets/img1.jpg',
          description: 'According to Census 2011 information the location code or village code of Khadakwasala village is 556246. Khadakwasala village is located in Haveli tehsil of Pune district in Maharashtra, India. It is situated 20km away from sub-district headquarter Pune (tehsildar office) and 12km away from district headquarter Pune. As per 2009 stats, Khadakwasala village is also a gram panchayat. The total geographical area of village is 786.28 hectares. Khadakwasala has a total population of 9,469 peoples, out of which male population is 4,916 while female population is 4,553. Literacy rate of khadakwasala village is 78.91% out of which 82.42% males and 75.12% females are literate. There are about 2,253 houses in khadakwasala village. Pincode of khadakwasala village locality is 411024. When it comes to administration, Khadakwasala village is administrated by a sarpanch who is elected representative of the village by the local elections. As per 2019 stats, Khadakwasala village comes under Khadakwasala assembly constituency & Baramati parliamentary constituency. Pune is nearest town to khadakwasala for all major economic activities, which is approximately 20km away.'
        };
        break;

      case 'Daund':
        this.cityInfo = {
          name: 'Daund Taluka',
          imageUrl: './assets/img2.jpg',
          description: 'Daund taluka is a taluka or subdivision of Pune district of the state of Maharashtra in India. The town of Daund is the only major urban area in this predominantly rural area. Daund railway station is a major railway junction. All southern railways are connected to this route, and also divided the Nagar railway to north Indian railway, like Delhi, Solapur division, Daund junction and then joined to the Pune district junction. To reach the Siddhi Vinayak Siddhatek Ganpati temple, one has to travel 14 km to Daund by road. In the winter season, when the temperature drops to 19 to 20°C, Daund has the most agricultural production of sugarcane. The riverbank farmers mostly plant sugarcane as their seasonal crop. The back water of the Ujani Dam riverbed region has Acacia tree forest. Many thorned-trees are found in this region. Three sugar factories are available in Daund 1)Daund sugar limited, Alegaon 2)Bhima Patas, Patas 3)Anuraj sugar limited, Yavat.'
        };
        break;

      case 'Indapur':
        this.cityInfo = {
          name: 'Indapur Taluka',
          imageUrl: './assets/img3.jpg',
          description: 'Indapur taluka is a taluka in Baramati subdivision of Pune district of state of Maharashtra in India. Indapur taluka has a population of 383,183 according to the 2011 census. Indapur had a literacy rate of 81.53% and a sex ratio of 927 females per 1000 males. 45,787 (11.95%) are under 7 years of age. 25,515 (6.66%) lived in urban areas. Scheduled Castes and Scheduled Tribes make up 15.94% and 1.24% of the population respectively. At the time of the 2011 Census of India, 93.65% of the population in the district spoke Marathi and 4.35% Hindi as their first language.'
        };
        break;

      case 'Purandar':
        this.cityInfo = {
          name: 'Purandar Taluka',
          imageUrl: './assets/img4.jpg',
          description: 'Purandar taluka is a taluka of Pune district of state of Maharashtra in India. There are 108 villages and 3 towns in Purandhar Taluka. Purandar taluka has a population of 235,659 according to the 2011 census. Purandar had a literacy rate of 82.55% and a sex ratio of 965 females per 1000 males. 25,037 (10.62%) are under 7 years of age. 57,564 (24.43%) lived in urban areas. Scheduled Castes and Scheduled Tribes make up 7.24% and 2.58% of the population respectively. At the time of the 2011 Census of India, 95.65% of the population in the district spoke Marathi and 2.73% Hindi as their first language.'
        };
        break;

      case 'Bhor':
        this.cityInfo = {
          name: 'Bhor Taluka',
          imageUrl: './assets/img5.jpg',
          description: 'Bhor taluka is a taluka in Haveli subdivision of Pune district of state of Maharashtra in India. There are 195 villages and 1 town in Bhor Taluka. Bhor taluka has a population of 186,116 according to the 2011 census. Bhor had a literacy rate of 81.42% and a sex ratio of 977 females per 1000 males. 20,599 (11.07%) are under 7 years of age. 18,453 (9.91%) lived in urban areas. Scheduled Castes and Scheduled Tribes make up 5.96% and 2.91% of the population respectively. At the time of the 2011 Census of India, 96.63% of the population in the district spoke Marathi and 1.88% Hindi as their first language.'
        };
        break;
      default:
        this.cityInfo = null;
    }
  }
}