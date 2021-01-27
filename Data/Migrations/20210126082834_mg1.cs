using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Medismart.Migrations
{
    public partial class mg1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Reservations",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "CheckOut", "Checkin", "Email", "EquipmentType" },
                values: new object[] { new DateTime(2021, 1, 26, 9, 28, 32, 187, DateTimeKind.Local).AddTicks(7743), new DateTime(2021, 1, 26, 9, 28, 32, 185, DateTimeKind.Local).AddTicks(6726), "Medismarts@gmail.com", "Travel trailer" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Reservations",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "CheckOut", "Checkin", "Email", "EquipmentType" },
                values: new object[] { new DateTime(2021, 1, 22, 6, 49, 30, 740, DateTimeKind.Utc).AddTicks(5970), new DateTime(2021, 1, 22, 6, 49, 30, 740, DateTimeKind.Utc).AddTicks(5103), "Medismartsgmail.com", "Hydro" });
        }
    }
}
