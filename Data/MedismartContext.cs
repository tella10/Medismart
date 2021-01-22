using Medismart.Data.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Medismart.Data
{
    public class MedismartContext : DbContext
    {
        public MedismartContext(DbContextOptions<MedismartContext> option) : base(option)
        {

        }
        public DbSet<Reservation> Reservations { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Reservation>()
                .HasData(new Reservation()
                {
                    Id = 1,
                    Accomodation = "RV",
                    Alias = "Mr",
                    FirstName = "Hambal",
                    LastName = "Tella",
                    GuestOld = 1,
                    GuestMiddle = 1,
                    GuestChild = 1,
                    Email = "Medismartsgmail.com",
                    Phone = 123455,
                    Checkin = DateTime.UtcNow,
                    CheckOut = DateTime.UtcNow,
                    EquipmentType = "Hydro",
                    SlideOut = false,
                    RequiredService = "water",
                    Pet = false,
                    Comments = "This is comment"
                });
        }
    }
}
