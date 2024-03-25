 "use client"
// import React from "react";
// import { useTheme } from "next-themes";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { z } from "zod";

// import { Button } from "@/components/ui/button";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { toast } from "@/components/ui/use-toast";
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

// const FormSchema = z.object({
//   type: z.enum(["dark", "light"], {
//     required_error: "You need to select a notification type.",
//   }),
// });

// const Display = () => {
//   const { setTheme } = useTheme();
//   const form = useForm<z.infer<typeof FormSchema>>({
//     resolver: zodResolver(FormSchema),
//   });

//   const handleThemeChange = (theme: string) => {
//     setTheme(theme);
//   };

//   const onSubmit = (data: z.infer<typeof FormSchema>) => {
//     toast({
//       title: "Selected Theme Applied",
//       description: (
//         <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
//           <code className="text-white">{JSON.stringify(data, null, 2)}</code>
//         </pre>
//       ),
//     });
//     handleThemeChange(data.type); // Apply selected theme
//   };

//   return (
//     <>
//       <Form {...form}>
//         <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
//           <FormField
//             control={form.control}
//             name="type"
//             render={({ field }) => (
//               <FormItem className="space-y-3">
//                 <FormLabel>Choose Theme </FormLabel>
//                 <FormControl>
//                   <RadioGroup
//                     onValueChange={field.onChange}
//                     defaultValue={field.value}
//                     className="flex flex-col space-y-1"
//                   >
//                     <FormItem className="flex items-center space-x-3 space-y-0">
//                       <FormControl>
//                         <RadioGroupItem value="dark" onChange={() => handleThemeChange("dark")} />
//                       </FormControl>
//                       {/* Rest of your code for theme selection */}
//                       <div className="items-center rounded-md border-2 border-muted bg-popover p-1 hover:bg-accent hover:text-accent-foreground">
//                         <div className="space-y-2 rounded-sm bg-slate-950 p-2">
//                           <div className="space-y-2 rounded-md bg-slate-800 p-2 shadow-sm">
//                             <div className="h-2 w-[80px] rounded-lg bg-slate-400" />
//                             <div className="h-2 w-[100px] rounded-lg bg-slate-400" />
//                           </div>
//                           <div className="flex items-center space-x-2 rounded-md bg-slate-800 p-2 shadow-sm">
//                             <div className="h-4 w-4 rounded-full bg-slate-400" />
//                             <div className="h-2 w-[100px] rounded-lg bg-slate-400" />
//                           </div>
//                           <div className="flex items-center space-x-2 rounded-md bg-slate-800 p-2 shadow-sm">
//                             <div className="h-4 w-4 rounded-full bg-slate-400" />
//                             <div className="h-2 w-[100px] rounded-lg bg-slate-400" />
//                           </div>
//                         </div>
//                       </div>

//                     </FormItem>
//                     <FormItem className="flex items-center space-x-3 space-y-0">
//                       <FormControl>
//                         <RadioGroupItem value="light" onChange={() => handleThemeChange("all")} />
//                       </FormControl>
//                       <div className="items-center rounded-md border-2 border-muted p-1 hover:border-accent">
//                         <div className="space-y-2 rounded-sm bg-[#ecedef] p-2">
//                           <div className="space-y-2 rounded-md bg-white p-2 shadow-sm">
//                             <div className="h-2 w-[80px] rounded-lg bg-[#ecedef]" />
//                             <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]" />
//                           </div>
//                           <div className="flex items-center space-x-2 rounded-md bg-white p-2 shadow-sm">
//                             <div className="h-4 w-4 rounded-full bg-[#ecedef]" />
//                             <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]" />
//                           </div>
//                           <div className="flex items-center space-x-2 rounded-md bg-white p-2 shadow-sm">
//                             <div className="h-4 w-4 rounded-full bg-[#ecedef]" />
//                             <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]" />
//                           </div>
//                         </div>
//                       </div>
//                     </FormItem>
//                   </RadioGroup>
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//           <Button type="submit">Submit</Button>
//         </form>
//       </Form>
//     </>
//   );
// };

// export default Display;


import React from "react";
import { useTheme } from "next-themes";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "@/components/ui/use-toast";

const FormSchema = z.object({
  type: z.enum(["dark", "light"], {
    required_error: "You need to select a notification type.",
  }),
});

const Display = () => {
  const { setTheme } = useTheme();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const handleThemeChange = (theme: string) => {
    setTheme(theme);
  };

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    toast({
      title: "Selected Theme Applied",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
    handleThemeChange(data.type); // Apply selected theme
  };

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>Choose Theme </FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="dark" onChange={() => handleThemeChange("dark")} />
                      </FormControl>
                      {/* Rest of your code for theme selection */}
                      {/* Add a label for dark theme */}
                      <FormLabel className="font-normal">Dark Theme</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="light" onChange={() => handleThemeChange("light")} />
                      </FormControl>
                      {/* Add a label for light theme */}
                      <FormLabel className="font-normal">Light Theme</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </>
  );
};

export default Display;
