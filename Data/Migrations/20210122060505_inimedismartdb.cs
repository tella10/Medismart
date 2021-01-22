using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Medismart.Migrations
{
    public partial class inimedismartdb : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Reservations",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Accomodation = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Alias = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    FirstName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    LastName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    GuestOld = table.Column<int>(type: "int", nullable: true),
                    GuestMiddle = table.Column<int>(type: "int", nullable: true),
                    GuestChild = table.Column<int>(type: "int", nullable: true),
                    Email = table.Column<string>(type: "nvarchar(1)", nullable: false),
                    Phone = table.Column<int>(type: "int", nullable: false),
                    Checkin = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CheckOut = table.Column<DateTime>(type: "datetime2", nullable: false),
                    EquipmentType = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SlideOut = table.Column<bool>(type: "bit", nullable: false),
                    RequiredService = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Pet = table.Column<bool>(type: "bit", nullable: false),
                    Comments = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Reservations", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Reservations");
        }
    }
}
