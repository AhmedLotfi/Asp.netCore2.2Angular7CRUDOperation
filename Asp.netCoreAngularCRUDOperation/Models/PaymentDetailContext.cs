using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Asp.netCoreAngularCRUDOperation.Models
{
    public class PaymentDetailContext:DbContext
    {

        public PaymentDetailContext(DbContextOptions<PaymentDetailContext> options)
            : base(options) {

        }


        public DbSet<PaymentDetail> PaymentDetail { get; set; }
    }
}
