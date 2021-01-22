using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Medismart.Data.Entities
{
    public class Reservation
    {
        public int Id { get; set; }
        public string Accomodation { get; set; }
        public string Alias { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int? GuestOld { get; set; }
        public int? GuestMiddle { get; set; }
        public int? GuestChild { get; set; }
        public string Email { get; set; }
        public int Phone { get; set; }
        public DateTime Checkin { get; set; }
        public DateTime CheckOut { get; set; }
        public string EquipmentType { get; set; }
        public bool SlideOut { get; set; }
        public string RequiredService { get; set; }
        public bool Pet { get; set; }
        public string Comments { get; set; }
    }
 }  
