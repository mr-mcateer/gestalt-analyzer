import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Info, MessageSquareText, FileText, Network, Layers, Wrench } from 'lucide-react';

const GestaltAnalyzer = () => {
  const [activeTab, setActiveTab] = useState('principles');
  
  // This would be dynamically generated from the ContextualAnalyzer
  // in a real implementation
  const analysis = {
    principles: [
      { title: "Modularity", description: "Create atomic notes that represent single, distinct ideas" },
      { title: "Own Words Processing", description: "Rewrite concepts in your own language to solidify understanding" },
      { title: "Ready for Publication", description: "Write notes as if they could be published immediately" },
      { title: "Deep Engagement", description: "Take time to process information slowly and deliberately" },
      { title: "Linkage & Networks", description: "Connect notes to create a network of ideas" }
    ],
    workflow: [
      { step: 1, title: "Initial Capture", description: "Take rough notes while engaging with material" },
      { step: 2, title: "Process Notes", description: "Transform rough notes into permanent notes" },
      { step: 3, title: "Write in Own Words", description: "Rewrite concepts while preserving meaning" },
      { step: 4, title: "Create Individual Notes", description: "Each concept becomes its own note" },
      { step: 5, title: "Link to Framework", description: "Connect new notes to existing knowledge" },
      { step: 6, title: "Index & Reference", description: "Maintain references to sources" }
    ],
    structure: [
      { title: "Daily Notes", description: "Entry points showing when notes were created" },
      { title: "Index Notes", description: "Topic-centered collections organizing notes by subject" },
      { title: "Reference Notes", description: "Notes about source materials" },
      { title: "Content Notes", description: "Individual concept notes with atomic ideas" },
      { title: "Backlinks", description: "Exploration of connections between notes" }
    ],
    tools: [
      { title: "Obsidian", description: "Primary tool for implementation" },
      { title: "Command line/Neovim", description: "Alternative workflow" },
      { title: "Excalibrain", description: "Visualization tool for exploring note relationships" }
    ],
    benefits: [
      { title: "Accelerated Learning", description: "Process enables learning much faster than peers" },
      { title: "Deep Understanding", description: "Supports deep engagement with material" },
      { title: "Idea Network", description: "Builds connections that can be recombined into new writing" },
      { title: "Rapid Retrieval", description: "Allows quick access through multiple paths" },
      { title: "Active Knowledge", description: "Transforms passive reading into knowledge creation" }
    ]
  };
  
  const iconMap = {
    principles: <Info className="h-5 w-5" />,
    workflow: <Layers className="h-5 w-5" />,
    structure: <Network className="h-5 w-5" />,
    tools: <Wrench className="h-5 w-5" />,
    benefits: <MessageSquareText className="h-5 w-5" />
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <Card className="mb-6">
        <CardHeader className="bg-blue-50">
          <CardTitle className="text-2xl font-bold text-blue-800">Contextual Gestalt Analyzer</CardTitle>
          <CardDescription className="text-blue-600">
            Extracting methodologies and frameworks from any content
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <p className="text-gray-700 mb-4">
            This tool analyzes content to identify the underlying methodologies, principles, 
            and frameworks that can be applied as a lens to other domains.
          </p>
        </CardContent>
      </Card>
      
      <Tabs defaultValue="principles" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-5 mb-8">
          <TabsTrigger value="principles" className="flex items-center gap-2">
            <Info className="h-4 w-4" /> Principles
          </TabsTrigger>
          <TabsTrigger value="workflow" className="flex items-center gap-2">
            <Layers className="h-4 w-4" /> Workflow
          </TabsTrigger>
          <TabsTrigger value="structure" className="flex items-center gap-2">
            <Network className="h-4 w-4" /> Structure
          </TabsTrigger>
          <TabsTrigger value="tools" className="flex items-center gap-2">
            <Wrench className="h-4 w-4" /> Tools
          </TabsTrigger>
          <TabsTrigger value="benefits" className="flex items-center gap-2">
            <MessageSquareText className="h-4 w-4" /> Benefits
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="principles" className="mt-0">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Info className="h-5 w-5 text-blue-600" /> 
                Core Principles
              </CardTitle>
              <CardDescription>
                Fundamental concepts that drive the methodology
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {analysis.principles.map((principle, index) => (
                  <div key={index} className="border-b pb-3 last:border-0">
                    <h3 className="font-bold text-lg text-blue-700">{principle.title}</h3>
                    <p className="text-gray-700">{principle.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="workflow" className="mt-0">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Layers className="h-5 w-5 text-green-600" /> 
                Workflow Process
              </CardTitle>
              <CardDescription>
                Step-by-step implementation of the methodology
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {analysis.workflow.map((step, index) => (
                  <div key={index} className="border-b pb-3 last:border-0 flex gap-4">
                    <div className="bg-green-100 text-green-700 h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-green-700">{step.title}</h3>
                      <p className="text-gray-700">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="structure" className="mt-0">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Network className="h-5 w-5 text-purple-600" /> 
                Organization Structure
              </CardTitle>
              <CardDescription>
                How information is organized in the system
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {analysis.structure.map((item, index) => (
                  <div key={index} className="border-b pb-3 last:border-0">
                    <h3 className="font-bold text-lg text-purple-700">{item.title}</h3>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="tools" className="mt-0">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Wrench className="h-5 w-5 text-orange-600" /> 
                Tools & Resources
              </CardTitle>
              <CardDescription>
                Software and resources that support the methodology
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {analysis.tools.map((tool, index) => (
                  <div key={index} className="border-b pb-3 last:border-0">
                    <h3 className="font-bold text-lg text-orange-700">{tool.title}</h3>
                    <p className="text-gray-700">{tool.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="benefits" className="mt-0">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquareText className="h-5 w-5 text-teal-600" /> 
                Benefits & Outcomes
              </CardTitle>
              <CardDescription>
                Advantages gained from implementing this approach
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {analysis.benefits.map((benefit, index) => (
                  <div key={index} className="border-b pb-3 last:border-0">
                    <h3 className="font-bold text-lg text-teal-700">{benefit.title}</h3>
                    <p className="text-gray-700">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default GestaltAnalyzer;