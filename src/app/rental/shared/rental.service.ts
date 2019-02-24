import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rental } from './rental.model';
import { ObserveOnOperator } from 'rxjs/operators/observeOn';

@Injectable()
export class RentalService {

    private rentals:Rental[]=[
    {
        id: "1",
        title: "Cental Apartment",
        city: "Nowy York",
        street: "Kolumba",
        category: "apartament",
        image: "http://via.placeholder.com/350x250",
        bedrooms: 3,
        description: "Bardzo ładny widok",
        dailyRate: 34,
        shared: false,
        createdAt:"24/12/2018"
      },
      {
        id: "2",
        title: "W japan Hosue",
        city: "Boruku",
        street: "Czjong",
        category: "dom",
        image: "http://via.placeholder.com/350x250",
        bedrooms: 3,
        description: "Bardzo ładny widok",
        dailyRate: 55,
        shared: false,
        createdAt:"24/11/2018"
      },
      {
        id: "3",
        title: "Ragge",
        city: "Detroid",
        street: "Kolumba4",
        category: "czujka",
        image: "http://via.placeholder.com/350x250",
        bedrooms: 3,
        description: "Bardzo ładny widok",
        dailyRate: 123,
        shared: false,
        createdAt:"24/10/2018"
      },
      {
        id: "4",
        title: "Git z tym",
        city: "Rockford",
        street: "Kolumba",
        category: "skrytka",
        image: "http://via.placeholder.com/350x250",
        bedrooms: 3,
        description: "Bardzo ładny widok",
        dailyRate: 34,
        shared: false,
        createdAt:"24/02/2018"
      }
    ];


    public getRentalById(rentalId: string): Observable<Rental> {
      return new Observable<Rental>((observer) => {
        setTimeout(() => {
          const foundRental = this.rentals.find((rental) => {
            return rental.id == rentalId;

          });
          observer.next(foundRental);
          }, 500);
        });
      
     }

     public getRentals(): Observable<Rental[]> {


      return new  Observable<Rental[]>((observer) => {
      setTimeout(() => {
        observer.next(this.rentals);
      }, 1000);
      });
     

     
      }
    }