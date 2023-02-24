import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor(private service:MovieApiServiceService){

  }

  bannerResult!:any[];
  trendingMovieResult!:any[];
  actionMovieResult!:any[];
  advantureMovieResult!:any[];
  animationMovieResult!:any[];
  comedyMovieResult!:any[];
  documentaionMovieResult!:any[];
  sciencefictionMovieResult!:any[];
  thrillerMovieResult!:any[];


  ngOnInit():void{
    this.bannerData();
    this.trendingData();
    this.actionMovie();
    this.advantureMovie();
    this.comedyMovie();
    this.animationMovie();
    this.documentaionMovie();
    this.sciencefictionMovie();
    this.thrillerMovie();
  }
     //bannerData
     bannerData(){
      this.service.bannerApiData().subscribe((result)=>{
        console.log(result,'bannerresult');
        this.bannerResult=result.results;
      })
    }
    trendingData(){
      this.service.trendingMovieApiData().subscribe((result)=>{
        console.log(result,'Trendingresult');
        this.trendingMovieResult=result.results;
      })
    }
    //action
    actionMovie(){
      this.service.fetchActionMovies().subscribe((result)=>{
        console.log(result+"ACION");
        this.actionMovieResult=result.results;
      })
    }
    advantureMovie(){
      this.service.fetchAdventureMovies().subscribe((result)=>{
        console.log(result+"advanture");
        this.advantureMovieResult=result.results;
      })
    }  
    animationMovie(){
      this.service.fetchAnimationMovies().subscribe((result)=>{
        console.log(result+"animation");
        this.animationMovieResult=result.results;
      })
    }  
    comedyMovie(){
      this.service.fetchComedyMovies().subscribe((result)=>{
        console.log(result+"comdey");
        this.comedyMovieResult=result.results;
      })
    }  
    documentaionMovie(){
      this.service.fetchDocumentaryMovies().subscribe((result)=>{
        console.log(result+"documention");
        this.documentaionMovieResult=result.results;
      })
    }  
    sciencefictionMovie(){
      this.service.fetchScienceFictionMovies().subscribe((result)=>{
        console.log(result+"scientifiction");
        this.sciencefictionMovieResult=result.results;
      })
    }  
    thrillerMovie(){
      this.service.fetchThrillerMovies().subscribe((result)=>{
        console.log(result+"thriller");
        this.thrillerMovieResult=result.results;
      })
    }

}
