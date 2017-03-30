using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PileBox
{
	class Program
	{
		static void Main(string[] args)
		{
			//Somente caixas quadradas
			Pile p1 = new Pile();
			p1.AddBox(new Box(1));
			p1.AddBox(new Box(2));
			p1.AddBox(new Box(1));
			p1.AddBox(new Box(1));
			p1.AddBox(new Box(5));
			p1.AddBox(new Box(3));
			p1.AddBox(new Box(2));
			p1.AddBox(new Box(4));
		}
	}
}
